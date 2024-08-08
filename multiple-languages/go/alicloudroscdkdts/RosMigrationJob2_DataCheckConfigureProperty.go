package alicloudroscdkdts


type RosMigrationJob2_DataCheckConfigureProperty struct {
	CheckMaximumHour interface{} `field:"optional" json:"checkMaximumHour" yaml:"checkMaximumHour"`
	CheckMaximumHourEnable interface{} `field:"optional" json:"checkMaximumHourEnable" yaml:"checkMaximumHourEnable"`
	DataCheckDbList interface{} `field:"optional" json:"dataCheckDbList" yaml:"dataCheckDbList"`
	DataCheckNoticePhone interface{} `field:"optional" json:"dataCheckNoticePhone" yaml:"dataCheckNoticePhone"`
	FullCheckErrorNotice interface{} `field:"optional" json:"fullCheckErrorNotice" yaml:"fullCheckErrorNotice"`
	FullCheckFixData interface{} `field:"optional" json:"fullCheckFixData" yaml:"fullCheckFixData"`
	FullCheckMaxReadBps interface{} `field:"optional" json:"fullCheckMaxReadBps" yaml:"fullCheckMaxReadBps"`
	FullCheckMaxReadRps interface{} `field:"optional" json:"fullCheckMaxReadRps" yaml:"fullCheckMaxReadRps"`
	FullCheckModel interface{} `field:"optional" json:"fullCheckModel" yaml:"fullCheckModel"`
	FullCheckNoticeValue interface{} `field:"optional" json:"fullCheckNoticeValue" yaml:"fullCheckNoticeValue"`
	FullCheckRatio interface{} `field:"optional" json:"fullCheckRatio" yaml:"fullCheckRatio"`
	FullCheckReferEndpoint interface{} `field:"optional" json:"fullCheckReferEndpoint" yaml:"fullCheckReferEndpoint"`
	FullCheckValidFailNotice interface{} `field:"optional" json:"fullCheckValidFailNotice" yaml:"fullCheckValidFailNotice"`
	FullDataCheck interface{} `field:"optional" json:"fullDataCheck" yaml:"fullDataCheck"`
	IncrementalCheckDelayNotice interface{} `field:"optional" json:"incrementalCheckDelayNotice" yaml:"incrementalCheckDelayNotice"`
	IncrementalCheckDelayNoticePeriod interface{} `field:"optional" json:"incrementalCheckDelayNoticePeriod" yaml:"incrementalCheckDelayNoticePeriod"`
	IncrementalCheckDelayNoticeTimes interface{} `field:"optional" json:"incrementalCheckDelayNoticeTimes" yaml:"incrementalCheckDelayNoticeTimes"`
	IncrementalCheckDelayNoticeValue interface{} `field:"optional" json:"incrementalCheckDelayNoticeValue" yaml:"incrementalCheckDelayNoticeValue"`
	IncrementalCheckErrorNotice interface{} `field:"optional" json:"incrementalCheckErrorNotice" yaml:"incrementalCheckErrorNotice"`
	IncrementalCheckValidFailNotice interface{} `field:"optional" json:"incrementalCheckValidFailNotice" yaml:"incrementalCheckValidFailNotice"`
	IncrementalCheckValidFailNoticePeriod interface{} `field:"optional" json:"incrementalCheckValidFailNoticePeriod" yaml:"incrementalCheckValidFailNoticePeriod"`
	IncrementalCheckValidFailNoticeTimes interface{} `field:"optional" json:"incrementalCheckValidFailNoticeTimes" yaml:"incrementalCheckValidFailNoticeTimes"`
	IncrementalCheckValidFailNoticeValue interface{} `field:"optional" json:"incrementalCheckValidFailNoticeValue" yaml:"incrementalCheckValidFailNoticeValue"`
	IncrementalDataCheck interface{} `field:"optional" json:"incrementalDataCheck" yaml:"incrementalDataCheck"`
}

