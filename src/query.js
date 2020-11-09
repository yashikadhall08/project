import gql from "graphql-tag";


export const SUBMIT_SCHEDULE = gql`
  mutation ($day: String!,$ehr: String!, $emin: String!,  $etime:String!,  $month: String!,  $shr:String!,  $smin:String!,  $stime:String!,  $title: String!,  $year:String!) {
    insert_scheduleList(objects: [{day:$day,ehr:$ehr,emin:$emin,etime:$etime,month:$month,shr:$shr,smin:$smin,stime:$stime,title: $title,year: $year}])
     
    {
       affected_rows
     }
  }
`; 
/*export const SUBMIT_SCHEDULE = gql`
mutation  {
    insert_scheduleList(objects: {day: "", ehr: "", emin: "", etime: "", month: "", shr: "", smin: "", stime: "", title: "", year: ""}) {
      affected_rows
      returning {
        day
        ehr
        emin
        etime
        month
        shr
        smin
        stime
        title
        year
      }
    }
  }
  `; */