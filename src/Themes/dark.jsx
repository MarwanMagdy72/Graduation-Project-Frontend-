

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light" ? 
    { 
      textColor:{
        main:"#2C2C2C",
        ComColor:"#2C2C2C",
        bgyearColor :"#EDEDED" ,
        textyearColor :"" ,
      },
      bgcolortopbar:{
        main:"white"
      },
      bgcolorSideBar:{
        main:"#2F8B3A"
      },
      bodyColor:{
        main :"#F7F6F9"
      }
   


    } 


    :
  {

    textColor:{
      main:"white",
      ComColor:"#928f8f",
      bgyearColor :"" ,
      textyearColor:"white"
    },
    bgcolortopbar:{
      main:""
    },

    bgcolorSideBar:{
      main:""
    },
    bodyColor:{
      main :""
    }








  }

    
    ),
  },
});
