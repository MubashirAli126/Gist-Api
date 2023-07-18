import React from 'react'
import styled from 'styled-components'
import moment from 'moment'
import {FiCode} from 'react-icons/fi';
import {PiGitFork} from 'react-icons/pi';
import {BiComment} from 'react-icons/bi';
import {BsFillStarFill} from 'react-icons/bs';
import {RxReader} from 'react-icons/rx'

const GistList = ({ gists }) => {
    // console.log(gists)
    return (
        <Header>
            <ul>
                {gists.map((gist) => {
                    let obj = gist?.files
                    let filesArray = Object.keys(obj);
                    return (
                        <li key={gist.id}>
                            <div className="avatar">
                                <image src={gist?.owner?.avatar_url} />
                                 {gist?.owner?.login}
                            </div>
                            
                            <div className='menu'> 
                                <ul>
                                    <li><FiCode /> {filesArray.length}</li>
                                    <li><PiGitFork /> Forks</li>
                                    <li><BiComment /> {gist.comments}</li>
                                    <li>< BsFillStarFill/> Star</li>
                                </ul>
                            </div>
                            <div className='publicstatuscheck'>Public: {gist.public ? 'Yes' : 'No'}</div>
                            <div className='dateTime'>
                                <span> Created at: {moment(gist.created_at).format('DD/MM/YYYY')} </span>
                                <span> Last Updated: {moment(gist.updated_at).format('DD/MM/YYYY')} </span>
                            </div>
                            <h1>{filesArray}</h1>
                            <ul className="textblue">{filesArray?.map(data => <li><RxReader /> {obj[data].filename}</li>)} </ul>
                        </li>
                    )
                })}
            </ul>
        </Header>
    );
};

const Header = styled.header`
    display: flex;
    justify-content: center;
    padding: 20px;
    color: #888;
  ul {
    padding: 0px;
  }

  li {
    list-style: none;
    display: inline-block;
  }

  .avatar {
    float: left;
    font-size: 20px;
    color: #0096F0;
  }
  .menu {
    float: right;
    padding-left: 20px;
    gap: 1em;
    font-size: 15px;
    color: #0096F0;
  }
  .menu li {
    padding: 5px 14px;
  }
  .textblue {
    color: #0096F0;
  }
`;

export default GistList
