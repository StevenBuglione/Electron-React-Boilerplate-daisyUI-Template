/* eslint-disable jsx-a11y/anchor-is-valid */
import './Logo.css';
import { APP_VERSION } from '../../utils/Constants';

const Logo = () => {
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <div className="flex flex-row gap-2 font-bold">
      <a className="sidebar-item rounded logo ">
        <span className="text-primary">electron</span>
        <span className="text-secondary">Template</span>
      </a>
      <div className="flex flex-col justify-end">
        <a className="sidebar-item rounded version">{APP_VERSION}</a>
      </div>
    </div>
  );
};

export default Logo;
