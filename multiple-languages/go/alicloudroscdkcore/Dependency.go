package alicloudroscdkcore


// A single dependency.
type Dependency struct {
	// Source the dependency.
	Source IConstruct `field:"required" json:"source" yaml:"source"`
	// Target of the dependency.
	Target IConstruct `field:"required" json:"target" yaml:"target"`
}

