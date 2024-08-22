package alicloudroscdkcms


// Properties for defining a `SiteMonitor`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-sitemonitor
type SiteMonitorProps struct {
	// Property address: The URL or IP address monitored by the monitoring task.
	Address interface{} `field:"required" json:"address" yaml:"address"`
	// Property taskName: The name of the site monitoring task.
	//
	// The name must be 4 to 100 characters in length.
	// It can contain letters, digits, and underscores (_).
	TaskName interface{} `field:"required" json:"taskName" yaml:"taskName"`
	// Property taskType: The protocol used by the site monitoring task.
	//
	// Valid values: HTTP, HTTPS, PING, TCP,
	// UDP, DNS, SMTP, POP3, and FTP.
	TaskType interface{} `field:"required" json:"taskType" yaml:"taskType"`
	// Property alertIds:.
	AlertIds interface{} `field:"optional" json:"alertIds" yaml:"alertIds"`
	// Property interval: The interval at which detection requests are sent.
	//
	// Valid values: 1, 5, and 15. Unit:
	// minutes. Default value: 1.
	Interval interface{} `field:"optional" json:"interval" yaml:"interval"`
	// Property ispCities: The information about detection points, which is specified in a JSON array.
	//
	// Example:
	// [{"city":"546","isp":"465"},{"city":"572","isp":"465"},{"city":"738","isp":"465"}]. The three city codes represent Beijing, Hangzhou, and Qingdao.
	// Note You can call the DescribeSiteMonitorISPCityList API operation to query the detection
	// points that can be used to create site monitoring tasks. For more information, see
	// DescribeSiteMonitorISPCityList . If this parameter is not specified, the system randomly selects three detection
	// points for site monitoring.
	IspCities interface{} `field:"optional" json:"ispCities" yaml:"ispCities"`
	// Property optionsJson: The extended options of the protocol that is used by the site monitoring task.
	//
	// The
	// options vary based on the protocol.
	OptionsJson interface{} `field:"optional" json:"optionsJson" yaml:"optionsJson"`
}

