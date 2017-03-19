<?php

	/**
	 * database utils lab
	 */
    class DUtils
    {
        private $bfsql = "";
        private $dberror = "";

        function __construct () {

            require_once(dirname(__FILE__) . '/../config/db.php');
            require_once(dirname(__FILE__) . '/../config/error.php');

            $this -> dberror = $errorStatus;
            $this -> bfsql = new mysqli($db_conf['servername'], $db_conf['username'], $db_conf['password'], $db_conf['dbname']);

            if ($this -> bfsql->connect_error) {

                die("连接失败: " . $this -> bfsql->connect_error);
            }

            $this -> bfsql -> query("SET NAMES 'UTF8'");
        }

        function check ($sql) {
            // check query statement
            // here can deal sql inject
            if (!isset($sql)) {
                return false;
            }else {
                return true;
            }
        }

    	function  insert ($sql) {

            if (!($this -> check($sql))) {

                return array('type' => '0', 'statement' => $this -> dberror[0]);
            }

    		// here need to deal sql inject !!!!
    		if ($this -> bfsql -> query($sql)) {
    			// $this -> bfsql -> close();
    			return array('type' => '1', 'statement' => $this -> dberror[1]);
    		}

    		// $this -> bfsql -> close();
    		return array('type' => '2', 'statement' => $this -> dberror[2]);
    	}

        function select ($sql) {
            if (!$this -> check($sql)) {
                return array('type' => '0', 'statement' => $this -> dberror[0]);
            }

            $result = $this -> bfsql -> query($sql);
            $returnValue = array();

            if ($result -> num_rows > 0) {
                while($row = $result->fetch_assoc()) {
                    array_push($returnValue, $row);
                }

                // $this -> bfsql -> close();
                return array('type'=> '4', 'statement' => $this -> dberror[4], 'data' => $returnValue);
            }
            // $this -> bfsql -> close();
            return array('type' => '3', 'statement' => $this -> dberror[3]);
        }

        function delete ($sql) {
            if (!$this -> check($sql)) {
                return array('type' => '0', 'statement' => $this -> dberror[0]);
            }

            if ($this -> bfsql -> query($sql)) {
                // $this -> bfsql -> close();
                return array('type' => '5', 'statement' => $this -> dberror[5]);
            }

            // $this -> bfsql -> close();
            return array('type' => '2', 'statement' => $this -> dberror[2]);
        }

				function update ($sql) {
            if (!$this -> check($sql)) {
                return array('type' => '0', 'statement' => $this -> dberror[0]);
            }

            if ($this -> bfsql -> query($sql)) {
                // $this -> bfsql -> close();
                return array('type' => '5', 'statement' => $this -> dberror[5]);
            }

            // $this -> bfsql -> close();
            return array('type' => '2', 'statement' => $this -> dberror[2]);
        }
    }
?>
