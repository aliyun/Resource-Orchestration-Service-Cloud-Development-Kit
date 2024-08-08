package alicloudroscdkedas


type RosK8sApplication_JavaStartUpConfigProperty struct {
	ConcGcThreads interface{} `field:"optional" json:"concGcThreads" yaml:"concGcThreads"`
	CustomParams interface{} `field:"optional" json:"customParams" yaml:"customParams"`
	G1HeapRegionSize interface{} `field:"optional" json:"g1HeapRegionSize" yaml:"g1HeapRegionSize"`
	GcLogFilePath interface{} `field:"optional" json:"gcLogFilePath" yaml:"gcLogFilePath"`
	GcLogFileSize interface{} `field:"optional" json:"gcLogFileSize" yaml:"gcLogFileSize"`
	HeapDumpOnOutOfMemoryError interface{} `field:"optional" json:"heapDumpOnOutOfMemoryError" yaml:"heapDumpOnOutOfMemoryError"`
	HeapDumpPath interface{} `field:"optional" json:"heapDumpPath" yaml:"heapDumpPath"`
	InitialHeapSize interface{} `field:"optional" json:"initialHeapSize" yaml:"initialHeapSize"`
	MaxDirectMemorySize interface{} `field:"optional" json:"maxDirectMemorySize" yaml:"maxDirectMemorySize"`
	MaxHeapSize interface{} `field:"optional" json:"maxHeapSize" yaml:"maxHeapSize"`
	MaxNewSize interface{} `field:"optional" json:"maxNewSize" yaml:"maxNewSize"`
	MaxPermSize interface{} `field:"optional" json:"maxPermSize" yaml:"maxPermSize"`
	NacosUseCloudNamespaceParsing interface{} `field:"optional" json:"nacosUseCloudNamespaceParsing" yaml:"nacosUseCloudNamespaceParsing"`
	NacosUseEndpointParsingRule interface{} `field:"optional" json:"nacosUseEndpointParsingRule" yaml:"nacosUseEndpointParsingRule"`
	NewRatio interface{} `field:"optional" json:"newRatio" yaml:"newRatio"`
	NewSize interface{} `field:"optional" json:"newSize" yaml:"newSize"`
	OldGarbageCollector interface{} `field:"optional" json:"oldGarbageCollector" yaml:"oldGarbageCollector"`
	ParallelGcThreads interface{} `field:"optional" json:"parallelGcThreads" yaml:"parallelGcThreads"`
	PermSize interface{} `field:"optional" json:"permSize" yaml:"permSize"`
	PrintGc interface{} `field:"optional" json:"printGc" yaml:"printGc"`
	PrintGcDateStamps interface{} `field:"optional" json:"printGcDateStamps" yaml:"printGcDateStamps"`
	SurvivorRatio interface{} `field:"optional" json:"survivorRatio" yaml:"survivorRatio"`
	ThreadStackSize interface{} `field:"optional" json:"threadStackSize" yaml:"threadStackSize"`
	UseGcLogFileRotation interface{} `field:"optional" json:"useGcLogFileRotation" yaml:"useGcLogFileRotation"`
	YoungGarbageCollector interface{} `field:"optional" json:"youngGarbageCollector" yaml:"youngGarbageCollector"`
}

