import React, { useState } from 'react';
import { List, ListItem, ListItemText, ListItemIcon, Collapse, Avatar } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

const ExpandableList = ({ categories }) => {
  const [open, setOpen] = useState({});

  const handleClick = (category) => {
    setOpen((prevOpen) => ({ ...prevOpen, [category]: !prevOpen[category] }));
  };

  const renderSubcategories = (subcategories, level = 0) => (
    <List component="div" disablePadding>
      {subcategories.map((subcategory) => (
        <div key={subcategory.name}>
          <ListItem button style={{ paddingLeft: level * 16 }} onClick={() => handleClick(subcategory.name)}>
            {subcategory.image && (
              <ListItemIcon>
                <Avatar src={subcategory.image} alt={subcategory.name} />
              </ListItemIcon>
            )}
            <ListItemText primary={subcategory.name} />
            {subcategory.subcategories && (open[subcategory.name] ? <ExpandLess /> : <ExpandMore />)}
          </ListItem>
          {subcategory.subcategories && (
            <Collapse in={open[subcategory.name]} timeout="auto" unmountOnExit>
              {renderSubcategories(subcategory.subcategories, level + 1)}
            </Collapse>
          )}
        </div>
      ))}
    </List>
  );

  return (
    <List component="nav">
      {categories.map((category) => (
        <div key={category.name}>
          <ListItem button onClick={() => handleClick(category.name)}>
            {category.image && (
              <ListItemIcon>
                <Avatar src={category.image} alt={category.name} />
              </ListItemIcon>
            )}
            <ListItemText primary={category.name} />
            {category.subcategories && (open[category.name] ? <ExpandLess /> : <ExpandMore />)}
          </ListItem>
          {category.subcategories && (
            <Collapse in={open[category.name]} timeout="auto" unmountOnExit>
              {renderSubcategories(category.subcategories)}
            </Collapse>
          )}
        </div>
      ))}
    </List>
  );
};

export default ExpandableList;
