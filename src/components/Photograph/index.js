import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FaUserGraduate } from 'react-icons/fa';
import { toast } from 'react-toastify';
import Loading from '../Loading';
import { Picture, Photographs, ActionEdit, FaEdit, Container } from './styled';
import axios from '../../services/axios';

export default function Photograph({ id, url }) {
  const [urlEdit, setUrlEdit] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setUrlEdit(url);
  }, [url]);

  const handleChange = useCallback(
    async (e) => {
      const photograph = e.target.files[0];
      const photographUrl = URL.createObjectURL(photograph);
      setUrlEdit(photographUrl);
      const formData = new FormData();
      formData.append('photo', photograph);
      try {
        setIsLoading(true);
        if (!urlEdit) {
          await axios.post(`/photo/student/${id}`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
        } else {
          await axios.put(`/photo/student/${id}`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
        }
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        toast.error('Erro ao carregar a imagem!!', {
          toastId: 'pth',
        });
      }
    },
    [id, urlEdit]
  );

  if (!id) return <></>;
  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Picture>
        {urlEdit ? (
          <Photographs src={urlEdit} />
        ) : (
          <FaUserGraduate size={120} />
        )}
      </Picture>
      <ActionEdit className="button-edit-student">
        <label htmlFor="photograph">
          <FaEdit size={24} />
          <input
            type="file"
            name="photograph"
            id="photograph"
            onChange={handleChange}
          />
        </label>
      </ActionEdit>
    </Container>
  );
}

Photograph.propTypes = {
  id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
