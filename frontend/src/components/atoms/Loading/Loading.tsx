import "./loadingStyles.css";
import CircularProgress from '@mui/material/CircularProgress';

export default function Loading(): React.ReactNode {
    return (
        <div className="content-loading">
            <CircularProgress />
        </div>
    )
}