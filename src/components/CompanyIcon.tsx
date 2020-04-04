import StorefrontIcon from '@material-ui/icons/Storefront';
import ChildCareIcon from '@material-ui/icons/ChildCare';
import FarmIcon from '@material-ui/icons/EmojiNature';
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';
import DrinkIcon from '@material-ui/icons/LocalBar';
import HospitalIcon from '@material-ui/icons/LocalHospital';

const CompanyIcon = (company: any) => {

  switch (company.kind) {
    case 'agriculture':
      return <FarmIcon />
    case 'clothing':
      return <StorefrontIcon />    
    case 'drink':
      return <DrinkIcon />    
    case 'stationery':
      return <StorefrontIcon />    
    case 'personal-care':
      return <StorefrontIcon />    
    case 'electronics':
      return <StorefrontIcon />    
    case 'pharmacy':
      return <HospitalIcon />    
    case 'hardware':
      return <StorefrontIcon />    
    case 'florist':
      return <LocalFloristIcon />    
    case 'grocery':
      return <StorefrontIcon />    
    case 'kids':
      return <ChildCareIcon />    
    case 'butcher':
      return <StorefrontIcon />   
    case 'commodity':
      return <StorefrontIcon />    
    case 'bakery':
      return <StorefrontIcon />    
    case 'cleaning':
      return <StorefrontIcon />    
    case 'repairs':
      return <StorefrontIcon />    
    case 'services':
      return <StorefrontIcon />    
    default:
      return <StorefrontIcon />
  }
}

export default CompanyIcon;