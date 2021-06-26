import React from 'react';
import './Write.scss';
import Scroll from '../../scrollindicator/Scroll';

export default function Write() {
    return (
        <>
            <Scroll/>
            <div className="write">
                <img src="https://anhdepblog.com/wp-content/uploads/2018/01/tai-hinh-nen-lionel-messi-dep-13.jpg" alt="" className="write__img"/>
                <form className="writeform">
                    <div className="writeform__group">
                        <label htmlFor="fileinput">
                            <i class="fas fa-plus icon"></i>
                        </label>
                        <input type="file" name="" id="fileinput" style={{display: 'none'}}/>
                        <input type="text" name="" id="" placeholder="Title" className="writeinput" autoFocus={true}/>
                    </div>
                    <div className="writeform__group">
                        <textarea placeholder="Tell your story..." type="text" cols="30" rows="7" className="writeinput writetext"></textarea>
                    </div>
                    <button className="writesubmit">publish</button>
                </form>
            </div>
        </>
    )
}
