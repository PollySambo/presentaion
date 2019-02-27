## **INTRODUCTION**
(importance of good decisions)
![](../images/family_cutting_tree.jpg)

## TABLE OF CONTENT
  
- What is Data Warehousing and some of the benefits
- ETL functions
- Data Lineage
- Temporal Date
- Apache Camel Enterprise Intergration Patterns
- Dimension Model
   - Facts
   - Dimension

# **DATA WAREHOUSE CONCEPTS**
![](/../images/datawareus.jpg)

## **__what is a data warehouse?__**
![](/../images/data-warehouse.jpg)

A data warehouse is a centralised store of data from the transactional and operational systems used by the various departments of an organisation to process their day-to-day activities. 

## benefits of a data warehouse
![](/../images/5-benefits-of-the-data-warehouse.png)
  
- Manage risk 


- Historical data 


- Quick access to data


- Better decision-making 




## ETL Functions
![](/../images/etl-diagram.jpg)

- Extract
- Transform
- Load


## __Data Lineage__
![](/../images/data_lineage.png)

- Data Lineage describes data origins, movements, characteristics, and quality over time
- Simplifies tracing errors back to their sources
- Trusting Big Data requires understanding its Data Lineage


## __Temporal Data__

- A temporal database stores data relating to time instances.
- It offers temporal data types and stores information relating to past, present and future time. The temporal database has two major  attributes. 
    - valid time. 
    - transaction time. 
- More specifically the temporal aspects usually include valid time and transaction time. 
- These attributes can be combined to form bitemporal data.

## __example__
![](/../images/temporal_data example.PNG)

## enterprise integration patterns slide
![](/../images/Enterprise_integration.png)

- Need for combining different programs
- APIs/libraries to consolidate data/programs
- Need for real-time processing

## Apache Camel
![](/../images/Apache-camel-logo.png)

- Open Source intergration framework based on Enterprise Intergration Patterns (EIP)
- Lets you implement EIP routing
- Translates a message type/format into another e.g XML into JSON


## __DIMENSIONAL MODEL__

A dimensional model is a data structure technique optimized for Data warehousing tools. The concept of Dimensional Modelling was developed by Ralph Kimball and is comprised of "fact" and "dimension" tables.

## _facts_


A fact table is a primary table in a dimensional model.
Facts are the measurements/metrics or facts from your business process. For a Sales business process, a measurement would be quarterly sales number

**A Fact Table contains**

- Measurements/facts

- Foreign key to dimension table

## _DIMENSION_

**Dimension**
 provides the context surrounding a business process event. In simple terms, they give who, what, where of a fact. In the Sales business process, for the fact quarterly sales number, dimensions would be

- Who  __ Customer Names
- Where __ Location
- What __ Product Name



## EXAMPLE
![](/../images/example_dimensional_model.PNG) 

##  __Questions__
![](/../images/questions.PNG)