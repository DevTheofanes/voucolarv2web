import styled from 'styled-components';

export const Container = styled.form`
    input{
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;
        
        border: 1px solid #d7d7d7;
        background-color:#e7e9ee;

        font-weight:400;
        font-size: 1rem; 
        
        &::placeholder{
            color: var(--text-body);
        }

        & + input{
            margin-top: 1rem;
        }

    }

    .textAreaInput{
        margin-top: 1rem;
        display: flex;
        flex-direction: column;

        textarea{
            width: 100%;
            padding: 0 0.5rem;
            height: 4.5rem;
            border-radius: 0.25rem;
            
            border: 1px solid #c1c1c1;
            background-color: var(--background);
            font-weight:400;
            font-size: 1rem; 
            
            &::placeholder{
                color: #c1c1c1;
            }

        }
    }

    .nextInput{
        margin-top: 1rem;
    }
`;

export const HeaderModal = styled.div`
    border-bottom: 1px solid #c1c1c1;
    margin-bottom: 1rem;
    h2{
        color: var(--primaryColor);
        margin-bottom: 0.4rem;
        font-size: 1.5rem;
    }

    display: flex;
    align-items: center;
    justify-content: space-between;

    h4{
        margin-bottom: 0.4rem;
        font-size: 0.8rem;
        color: #fff;
        border-radius: 0.5rem;
        padding: 0.25rem;
        background-color: ${props => props.statusColor ? props.statusColor : "#000"};
    }
    
`;

export const FieldsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .secondInput{
        margin-top: 0 !important;
        /* margin-left: 1rem; */
    }
`;

export const FieldInput = styled.div`
    & + div{
        margin-top: 1rem;
    }

    label {
        display: inline-block;
        font-size: 1rem;
        color: var(--primaryColor);
        margin-bottom: 0.5rem;
    }

    display: flex;
    flex-direction: column;

    select {
        width: 100%;
        padding: 0 0.5rem;
        height: 2.8rem;
        border-radius: 0.25rem;
        
        border: 1px solid #c1c1c1;
        background-color: var(--background);
        font-weight:400;
        font-size: 1rem; 
        
        &::placeholder{
            color: #c1c1c1;
        }
    }

    input{
        width: 100%;
        padding: 0 0.5rem;
        height: 2.8rem;
        border-radius: 0.25rem;
        
        border: 1px solid #c1c1c1;
        background-color: var(--background);
        font-weight:400;
        font-size: 1rem; 
        
        &::placeholder{
            color: #c1c1c1;
        }
    }

    .file{
        margin-top: 0.5rem;
        padding-top: 0.5rem;
      
    }   

    .file::-webkit-file-upload-button {
        border: 0;
        border-right: 1px solid #c1c1c1;
        margin-right: 0.4rem;
        color:  var(--primaryColor);
        cursor: pointer;
    }

    
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 2rem !important;

    button{
        padding: 0.5rem 1rem;
        border: 0;
        border-radius: 0.25rem;
        background-color: var(--primaryColor);

        font-size:1rem;
        font-weight: 600;
        color: #fff;

        transition: filter 0.2s;
        

        &:hover{
            filter: brightness(0.9)
        }
    }
`;