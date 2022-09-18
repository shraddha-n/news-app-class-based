import React, { Component } from 'react'
import Loading from './Loading';
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import Notfound from './Notfound';
import InfiniteScroll from 'react-infinite-scroll-component';

export default class News extends Component {
  static defaultProps = {
    category: "general",
    country: "in",
    pageSize: 5

  }

  static propTypes = {
    category: PropTypes.string,
    country: PropTypes.string,
    pageSize: PropTypes.number
  }
  capitalizeFirstLetter = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading:true,
      page: 1,
      totalResults:0,
      notfound: false

    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - News Cafe`;
  }
 
  async componentDidMount() {
   
    this.updateNews();
    console.log(this.state.articles.length)
    console.log(this.state.totalResults)
  }

  async updateNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${this.props.apiKey}&page=${this.state.page}&pagesize=${this.props.pageSize}&category=${this.props.category}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    if (parsedData.status !== 'error') {
      this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults});

    } else {
      this.setState({ notfound: true, loading: false });
    }
  }
  fetchData= async ()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pagesize=${this.props.pageSize}&category=${this.props.category}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: this.state.articles.concat(parsedData.articles) ,page:this.state.page + 1});
   
  }

  handlePreClick = async () => {
    await this.setState({ page: this.state.page - 1 });
    this.updateNews();
  }
  handleNextClick = async () => {
    await this.setState({ page: this.state.page + 1 });
    this.updateNews();

  }
 
  render() {
    return (
      <>
        
        {this.state.notfound && <Notfound />}
         <h1 className='text-center my-2'>NewsCafe - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
         {/* {this.state.loading && <Loading />} */}
         <InfiniteScroll
          dataLength={this.state.articles.length} //This is important field to render the next data
          next={this.fetchData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Loading />}>
        <div className='container'>
        <div className="row my-3" >
          { this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imgUrl={element.urlToImage ? element.urlToImage : ""} newsId={element.url ? element.url : ""} date={element.publishedAt ? element.publishedAt : ""} author={element.author ? element.author : "Unknown"} source={element.source.name ? element.source.name : ""} />
            </div>
          })}
        </div>
        </div>
        </InfiniteScroll>

        {/* {!this.state.notfound && <div className="d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" onClick={this.handlePreClick} className="btn btn-dark btn-lg">&larr; Previous</button>
          <button disabled={this.state.page >= Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" onClick={this.handleNextClick} className="btn btn-dark btn-lg">Next &rarr;</button>
        </div>
        } */}


      </>
    )
  }
}
