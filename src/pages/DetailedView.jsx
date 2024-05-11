import React, { useEffect, useState } from 'react';
import Topbar from '../components/Topbar';
import './pages.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../App';

function DetailedView({ mode, setMode }) {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true); // Add loading state
    const { id } = useParams();

    const fetchData = async () => {
        try {
            const res = await axios.get(`${API_URL}/recipe/${id}`,{
                headers: {
                  Authorization: `Bearer ${token}` 
                }
              });
            console.log(res.data.recipe);
            setData(res.data.recipe);
            setLoading(false); // Set loading to false after data is fetched
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false); // Set loading to false even in case of error
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <Topbar mode={mode} setMode={setMode} />
            <div className={`detailed-view ${mode ? 'bg-dark' : 'bg-light'}`}>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <>
                        <div className="detailed-left-container">
                            <img src={data.recipeImage} alt="" />
                        </div>

                        <div className="detailed-right-container">
                            <h1>{data.description}</h1>
                            <h4>By Saran Kumar </h4>
                            <div className="detailed-cound-container">
                                <div>
                                    <h1>{data.ingredientsCount}</h1>
                                    <p>Ingredients</p>
                                </div>
                                <div>
                                    <h1>{data.timeRequired}</h1>
                                    <p>Time</p>
                                </div>
                                <div>
                                    <h1>{data.calories}</h1>
                                    <p>Calories</p>
                                </div>
                            </div>

                            <div className="ingredients-header">
                                <h3>Ingredients</h3>
                                <h3>For {data.memberCount} Servings</h3>
                            </div>

                            <div className="making-guide">
                                <ul>
                                    {data.ingredients.map((e, i) => {
                                        return <li key={i}>{e}</li>;
                                    })}
                                </ul>
                                <p>{data.guide}</p>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}

export default DetailedView;
