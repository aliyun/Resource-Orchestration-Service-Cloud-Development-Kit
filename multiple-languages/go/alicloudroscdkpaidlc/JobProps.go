package alicloudroscdkpaidlc


// Properties for defining a `Job`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paidlc-job
type JobProps struct {
	// Property displayName: The name of the task is as follows: The name length does not exceed 256 characters.
	//
	// Allow numbers, letters, lower strokes (_), English period (.) And short horizontal lines (-).
	DisplayName interface{} `field:"required" json:"displayName" yaml:"displayName"`
	// Property jobSpecs: Jobspecs describes various configurations of tasks during the mission, such as mirror address, start command, node resource statement, number of copies, etc.
	//
	// The DLC task consists of different types of nodes. The same type of nodes have exactly the same configuration. This configuration is called a Jobspec. Jobspecs describes the configuration of all types of nodes and is the array of Jobspec.
	JobSpecs interface{} `field:"required" json:"jobSpecs" yaml:"jobSpecs"`
	// Property jobType: The type of job.
	//
	// Values: TFJob, PyTorchJob, XGBoostJob, OneFlowJob, ElasticBatch.
	JobType interface{} `field:"required" json:"jobType" yaml:"jobType"`
	// Property userCommand: Start commands of all nodes in the task.
	UserCommand interface{} `field:"required" json:"userCommand" yaml:"userCommand"`
	// Property workspaceId: Work space ID, how to get working space ID, see listworkSpaces.
	WorkspaceId interface{} `field:"required" json:"workspaceId" yaml:"workspaceId"`
	// Property codeSource: The code source used in this task.Before the mission node starts, the DLC will automatically download the code configured in the code source, and mount to the local directory of the container.
	CodeSource interface{} `field:"optional" json:"codeSource" yaml:"codeSource"`
	// Property dataSources: List of data source used for task operation.
	DataSources interface{} `field:"optional" json:"dataSources" yaml:"dataSources"`
	// Property envs: Environment variable configuration.
	Envs interface{} `field:"optional" json:"envs" yaml:"envs"`
	// Property jobMaxRunningTimeMinutes: The longest running time is running, and the unit is minutes.
	JobMaxRunningTimeMinutes interface{} `field:"optional" json:"jobMaxRunningTimeMinutes" yaml:"jobMaxRunningTimeMinutes"`
	// Property options: The additional configuration of this task can adjust some of the behavior of the mounting data source through this parameter.If the task has a data source that mounted the OSS type, you can cover the default parameters of the jinofs by configure the configuration of this parameter to fs.OSS.DOWNLOAD.CONCURRENCY = 4, fs.oss.download.queue.size = 16.
	Options interface{} `field:"optional" json:"options" yaml:"options"`
	// Property priority: The priority of the task, optional parameter, default value 1, the range of parameter values is 1 ~ 9.in: 1 is the minimum priority. 9 is the highest priority.
	Priority interface{} `field:"optional" json:"priority" yaml:"priority"`
	// Property resourceId: Resource group ID, optional parameter.
	//
	// The parameter value is empty indicating that submitted to the public resource group.
	// If the current working space has been bound to a proprietary resource group, you can specify the corresponding resource group ID here; how to create a proprietary resource group and inquire about the proprietary resource group ID, please refer to the preparation and management of the DLC resource group cluster.
	ResourceId interface{} `field:"optional" json:"resourceId" yaml:"resourceId"`
	// Property settings: Job settings.
	Settings interface{} `field:"optional" json:"settings" yaml:"settings"`
	// Property successPolicy: The successful strategy of distributed multi -machine tasks is currently only supported by TensorFlow's multi -machine task.
	//
	// ChiefWorker: When it is specified as this value, as long as the Chief's POD is successful, it is considered that the entire task is successful.
	// All workers: All workers must be successful to think that the entire task is successful.
	SuccessPolicy interface{} `field:"optional" json:"successPolicy" yaml:"successPolicy"`
	// Property thirdpartyLibDir: The name folder of the Requirements.txt file is located; before each node runs the specified usercommand, PAI -DLC will take the requirements.txt file from the specified folder and call the PIP Install -R installation.
	ThirdpartyLibDir interface{} `field:"optional" json:"thirdpartyLibDir" yaml:"thirdpartyLibDir"`
	// Property thirdpartyLibs: Python third-party library list to be installed.
	ThirdpartyLibs interface{} `field:"optional" json:"thirdpartyLibs" yaml:"thirdpartyLibs"`
	// Property userVpc: User VPC configuration.
	UserVpc interface{} `field:"optional" json:"userVpc" yaml:"userVpc"`
}

