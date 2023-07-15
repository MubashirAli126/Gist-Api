import React from 'react'
import styled from 'styled-components'
import moment from 'moment'

const GistList = ({ gists }) => {
    // console.log(gists)
    return (
        <Wrapper>
            <ul>
                {gists.map((gist) => {
                    let obj = gist?.files
                    let filesArray = Object.keys(obj);
                    return (
                        <li key={gist.id}>
                            <div className='d-flex flex-wrap flex-justify-end mb-3  container-xl  px-3 px-md-4 px-lg-5'>
                                <div className='flex-auto min-width-0 width-fit mr-3'>
                                    <div className=' d-flex flex-wrap flex-items-center wb-break-word f3 text-normal'>
                                    <div className="logo">
                                <image src={gist?.owner?.avatar_url} />
                                 {gist?.owner?.login}
                                </div>
                                    </div>
                          
                                </div>
                                <div>
                                <ul>
                                    <li>{filesArray.length}</li>
                                    <li>Forks</li>
                                    <li>{gist.comments}</li>
                                    <li>Star</li>
                                    </ul>
                                </div>
                            </div>

                            <div className='dateTime'>
                                <span> Created at: {moment(gist.created_at).format('DD/MM/YYYY')} </span>
                                <span> Last Updated: {moment(gist.updated_at).format('DD/MM/YYYY')} </span>
                            </div>
                            <h2>{gist.description}</h2>

                            <ul>{filesArray?.map(data => <li>{obj[data].filename}</li>)} </ul>

                            {gist.language && <p>Language: {gist.language}</p>}
                            {gist.forks && <p>Forks: {gist.forks}</p>}
                            <p>Comments: {gist.comments}</p>
                            <p>Files: {Object.keys(gist.files).length}</p>
                            <p>Public: {gist.public ? 'Yes' : 'No'}</p>
                            <p>Owner: {gist.owner.login}</p>
                            <p>URL: <a href={gist.html_url}>{gist.html_url}</a></p>
                        </li>
                    )
                })}
            </ul>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    text-align: center;
    padding: 8px;
    background-color: #fff
    font-size: 14px;
    line-height: 1.5;
    border-radius: 6px;
    margin: 0 16px;
`;

export default GistList
