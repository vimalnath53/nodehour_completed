--
-- Table structure for table `customers_list`
--

DROP TABLE IF EXISTS `customers_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `customers_list` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `is_admin` int(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=latin1;




INSERT INTO `customers_list` VALUES (2,'Naginitra Nirakar Singh','nnirakarsingh@paypal.com',0),(3,'Norazlan Bin Kassim','nbinkassim@paypal.com',0),(4,'Punnareddy Umma','pumma@paypal.com',1),(5,'Sheng Hui Goh','shgoh@paypal.com',0),(6,'Siti Zubaidah Yusof','syusof@paypal.com',0),(7,'Thivakaran Selvarajoo','tselvarajoo@paypal.com',0),(8,'Vimalnath Ravichandran','vravichandran@paypal.com',1),(9,'Victoria Anson','asvictoria@paypal.com',0),(10,'Niraj Kumar','nkumar11@paypal.com',0),(11,'Prashanthi Uttarapally','puttarapally@paypal.com',0),(12,'Handoko Giovani','ghandoko@paypal.com',0),(13,'Abdul Majid Rauf','ABDABDULMAJID@paypal.com',0),(14,'Abdul Karim Hilman','habdulkarim@paypal.com',0),(15,'Fathia Anis','afathia@paypal.com',0),(16,'Bte Munawar Kabir Mohd Kate','sbtemunawarkabir@paypal.com',0),(17,'Madhi Indran','mindran@paypal.com',1);


