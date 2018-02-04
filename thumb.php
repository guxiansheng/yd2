<?php
    class Thumb {
        public $servername;
        public $username;
        public $password;
        public $dbname;
        public $con="";
        public function __construct($servername, $username, $password, $dbname){
            $this->servername = $servername;
            $this->username = $username;
            $this->password = $password;
            $this->dbname = $dbname;
        }
        public function getConnection() {
            try {
                $args = "mysql:host=$this->servername;dbname=$this->dbname";
                $this->con = new PDO($args, $this->username, $this->password);
                echo "连接成功";
            }
            catch(PDOException $e)
            {
                echo $e->getMessage();
            }
        }
        public function updateData($sql) {
            if ($this->con == null) {
                $this->getConnection();
            }
            header("content-type:application/json;charset=utf-8");
            $res = $this->con->exec($sql);
            $arr = array('result'=>$res);
            echo json_encode($arr);
            $this->closeCon();
        }
        public function closeCon() {
            $this->con = null;
        }
    }

    class dz extends Thumb {
        public function __construct($servername, $username, $password, $dbname){
            parent::__construct($servername, $username, $password, $dbname);
        }
        public function updateDatadz() {
            $sql = "UPDATE `thumbnum` SET `number`=number+1 WHERE id=1";
            $this->updateData($sql);
        }
    }

    $thumbs = new dz('localhost', 'root', '', 'thumb');
    $thumbs->updateDatadz();

?>