package alicloudroscdknas


// Properties for defining a `DataFlow`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-dataflow
type DataFlowProps struct {
	// Property fileSystemId: File system ID.
	FileSystemId interface{} `field:"required" json:"fileSystemId" yaml:"fileSystemId"`
	// Property fsetId: Fileset ID.
	FsetId interface{} `field:"required" json:"fsetId" yaml:"fsetId"`
	// Property sourceStorage: Access path stored at the source.Format: <storage Type>: \/\/ <PATH>. in: Storage Type: Currently only supports OSS. PATH: OSS's bucket name.Limit the following. Only support the lowercase letters, numbers and short strokes (-) and must start with a lowercase letter or number. The length is 8 ~ 128 English characters. Use UTF-8 encoding. Can't start with http: \/\/ and https: \/\/. Explain that the OSS BUCKET must be the bucket that exists in the region.
	SourceStorage interface{} `field:"required" json:"sourceStorage" yaml:"sourceStorage"`
	// Property throughput: The upper limit of transmission bandwidth for data flow, unit: MB\/s. Value:  600 1200 1500.
	//
	// Explanation The transmission bandwidth of the data flow must be smaller than the IO bandwidth of the file system.
	Throughput interface{} `field:"required" json:"throughput" yaml:"throughput"`
	// Property autoRefreshInterval: The automatic update interval time, every time the interval, the CPFS checks whether there is a data update in the directory.
	//
	// If there is data update, start the automatic update task, unit: minute.
	// Scope of value: 5 ~ 525600, default value: 10.
	AutoRefreshInterval interface{} `field:"optional" json:"autoRefreshInterval" yaml:"autoRefreshInterval"`
	// Property autoRefreshPolicy: Automatic update strategy, after the source data is updated, the data update is introduced to the CPFS strategy.
	//
	// None (default): The data update of the source is not automatically imported into CPFS. Users can import data update at the source end of the source through data flow tasks.
	// Importchanged: The data update at the source automatically imports CPFS.
	AutoRefreshPolicy interface{} `field:"optional" json:"autoRefreshPolicy" yaml:"autoRefreshPolicy"`
	// Property autoRefreshs:.
	AutoRefreshs interface{} `field:"optional" json:"autoRefreshs" yaml:"autoRefreshs"`
	// Property description: Description of data flow.
	//
	// limit:
	// The length is 2 to 128 English or Chinese characters.
	// Start with a lowercase letter or Chinese, and you cannot start with http:\/\/ and https: \/\/.
	// It can contain numbers, half-horn colon (:), down line (_) or short lines (-).
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property sourceSecurityType: The type of safety protection types of the source storage.
	//
	// If the source storage must be protected through safety protection, please specify the type of safety protection type storage.Value:
	// No (default value): It means that the source storage does not need to be accessed by safe protection.
	// SSL: Protective access through SSL certificates.
	SourceSecurityType interface{} `field:"optional" json:"sourceSecurityType" yaml:"sourceSecurityType"`
}

