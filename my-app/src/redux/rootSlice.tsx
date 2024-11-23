import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface PortfolioData {
   
    [key: string]: any;
  }
interface RootState {
    portfolioData: PortfolioData | null;// Adjust the type according to your data structure
    reloadData: boolean;
}

const initialState: RootState = {
    portfolioData: {},
    reloadData: false
};

const rootSlice = createSlice({



    
    name: "root",
    initialState,

    
    reducers: {
       
        setPortfolioData: (state, action: PayloadAction<PortfolioData>) => {
            state.portfolioData = action.payload;
            console.log("state.portfolioData111qqq`",);

        },
        setReloadData: (state, action: PayloadAction<boolean>) => {
            state.reloadData = action.payload;
        }
    }
});

export const { setPortfolioData, setReloadData } = rootSlice.actions;
export default rootSlice.reducer;
// import { createSlice } from '@reduxjs/toolkit';
// interface RootState {
//     portfolioData: any; // Adjust the type according to your data structure
//     reloadData: boolean;
// }

// const initialState: RootState = {
//     portfolioData: null,
//     reloadData: false
// };
// const rootSlice= createSlice({
//     name:"root",
//     initialState:{
//         // loading:false,
//         portfolioData:null,
//         reloadData: false
//     },
    // reducers:{
    //     // ShowLoading:(state,action)=>{
    //     //     state.loading=true;
    //     // },
    //     // HideLoading:(state,action)=>{
    //     //     state.loading=false
    //     // },
    //     setPortfolioData:(state,action)=>{
    //         state.portfolioData=action.payload
    //         console.log("state.portfolioData",state.portfolioData);
    //     },
    //     ReloadData: (state,action)=>{
    //         state.reloadData=action.payload
    //     }
       
    // }
   
// })

// export default rootSlice.reducer;
// export const {setPortfolioData, reloadData}=rootSlice.actions