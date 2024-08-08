package alicloudroscdkcore


type RosParameterProps struct {
	AllowedPattern *string `field:"optional" json:"allowedPattern" yaml:"allowedPattern"`
	AllowedValues *[]interface{} `field:"optional" json:"allowedValues" yaml:"allowedValues"`
	AssociationProperty *string `field:"optional" json:"associationProperty" yaml:"associationProperty"`
	AssociationPropertyMetadata *map[string]interface{} `field:"optional" json:"associationPropertyMetadata" yaml:"associationPropertyMetadata"`
	Confirm *bool `field:"optional" json:"confirm" yaml:"confirm"`
	ConstraintDescription interface{} `field:"optional" json:"constraintDescription" yaml:"constraintDescription"`
	DefaultValue interface{} `field:"optional" json:"defaultValue" yaml:"defaultValue"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	Label *string `field:"optional" json:"label" yaml:"label"`
	MaxLength *float64 `field:"optional" json:"maxLength" yaml:"maxLength"`
	MaxValue *float64 `field:"optional" json:"maxValue" yaml:"maxValue"`
	MinLength *float64 `field:"optional" json:"minLength" yaml:"minLength"`
	MinValue *float64 `field:"optional" json:"minValue" yaml:"minValue"`
	NoEcho *bool `field:"optional" json:"noEcho" yaml:"noEcho"`
	TextArea *bool `field:"optional" json:"textArea" yaml:"textArea"`
	Type RosParameterType `field:"optional" json:"type" yaml:"type"`
}

