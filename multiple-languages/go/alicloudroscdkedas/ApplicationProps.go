package alicloudroscdkedas


// Properties for defining a `Application`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-application
type ApplicationProps struct {
	// Property applicationName: The application name (only allow the use of numbers, letters, -, _, up to 36 characters).
	ApplicationName interface{} `field:"required" json:"applicationName" yaml:"applicationName"`
	// Property clusterId: Cluster ID of ECS application.
	ClusterId interface{} `field:"required" json:"clusterId" yaml:"clusterId"`
	// Property buildPackId: EDAS-Container construct a packet number (available version list acquired through the ListBuildPack API (ConfigId of response) or "container version" table "Building packet number" column acquisition).
	//
	// When creating HSF application, this parameter must be specified.
	BuildPackId interface{} `field:"optional" json:"buildPackId" yaml:"buildPackId"`
	// Property componentIds: Application component ID (available through the query interface to obtain a list of components to the interface ListComponents), when creating the application runtime environment using Apache Tomcat (war packet format Dubbo Application required) or standard Java application (jar package format Spring Boot \/ Spring Cloud applications require) you need to specify when the operating environment.
	//
	// Commonly used application component ID and meaning:
	// 4 represents Apache Tomcat 7.0.91,7 represented Apache Tomcat 8.5.42,5 represented OpenJDK 1.8.x, 6 represents OpenJDK
	// 1.7.x
	ComponentIds interface{} `field:"optional" json:"componentIds" yaml:"componentIds"`
	// Property deployment: Deploy application information to ECS clusters.
	Deployment interface{} `field:"optional" json:"deployment" yaml:"deployment"`
	// Property description: Descriptive information.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property ecuInfo: Machine capacity is needed ecu_id (ECS Examples introducing another unique identity EDAS EDAS), the plurality of "," separated (by querying ListScaleOutEcu wherein ecu_id Interface to obtain).
	EcuInfo interface{} `field:"optional" json:"ecuInfo" yaml:"ecuInfo"`
	// Property healthCheckUrl: Application Health Check URL.
	HealthCheckUrl interface{} `field:"optional" json:"healthCheckUrl" yaml:"healthCheckUrl"`
	// Property logicalRegionId: Namespace ID.
	LogicalRegionId interface{} `field:"optional" json:"logicalRegionId" yaml:"logicalRegionId"`
	// Property packageType: Application packet format, possible values: war or jar.
	PackageType interface{} `field:"optional" json:"packageType" yaml:"packageType"`
	// Property resourceGroupId: Resource group id.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
}

