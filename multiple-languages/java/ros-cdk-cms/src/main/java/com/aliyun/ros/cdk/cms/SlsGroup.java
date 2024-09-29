package com.aliyun.ros.cdk.cms;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::CMS::SlsGroup</code>, which is used to create a Logstore group for the metrics of Simple Log Service logs.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-29T07:52:37.171Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms.$Module.class, fqn = "@alicloud/ros-cdk-cms.SlsGroup")
public class SlsGroup extends com.aliyun.ros.cdk.core.Resource {

    protected SlsGroup(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected SlsGroup(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public SlsGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cms.SlsGroupProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public SlsGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cms.SlsGroupProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute CreateTime: The creation time of the Logstore group.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute SlsGroupConfig: The configurations of the Logstore group.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSlsGroupConfig() {
        return software.amazon.jsii.Kernel.get(this, "attrSlsGroupConfig", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute SlsGroupDescription: The description of the Logstore group.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSlsGroupDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrSlsGroupDescription", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute SlsGroupName: The name of the Logstore group.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSlsGroupName() {
        return software.amazon.jsii.Kernel.get(this, "attrSlsGroupName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    protected void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.String getId() {
        return software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    protected void setId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "id", java.util.Objects.requireNonNull(value, "id is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cms.SlsGroupProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cms.SlsGroupProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cms.SlsGroupProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cms.SlsGroup}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cms.SlsGroup> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.cms.SlsGroupProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cms.SlsGroupProps.Builder();
        }

        /**
         * Property slsGroupConfig: The configurations of the Logstore group.Valid values of N: 1 to 25.
         * <p>
         * @return {@code this}
         * @param slsGroupConfig Property slsGroupConfig: The configurations of the Logstore group.Valid values of N: 1 to 25. This parameter is required.
         */
        public Builder slsGroupConfig(final com.aliyun.ros.cdk.core.IResolvable slsGroupConfig) {
            this.props.slsGroupConfig(slsGroupConfig);
            return this;
        }
        /**
         * Property slsGroupConfig: The configurations of the Logstore group.Valid values of N: 1 to 25.
         * <p>
         * @return {@code this}
         * @param slsGroupConfig Property slsGroupConfig: The configurations of the Logstore group.Valid values of N: 1 to 25. This parameter is required.
         */
        public Builder slsGroupConfig(final java.util.List<? extends java.lang.Object> slsGroupConfig) {
            this.props.slsGroupConfig(slsGroupConfig);
            return this;
        }

        /**
         * Property slsGroupName: The name of the Logstore group.The name must be 2 to 32 characters in length and can contain uppercase letters, lowercase letters, digits, and underscores (_). The name must start with a letter.
         * <p>
         * @return {@code this}
         * @param slsGroupName Property slsGroupName: The name of the Logstore group.The name must be 2 to 32 characters in length and can contain uppercase letters, lowercase letters, digits, and underscores (_). The name must start with a letter. This parameter is required.
         */
        public Builder slsGroupName(final java.lang.String slsGroupName) {
            this.props.slsGroupName(slsGroupName);
            return this;
        }
        /**
         * Property slsGroupName: The name of the Logstore group.The name must be 2 to 32 characters in length and can contain uppercase letters, lowercase letters, digits, and underscores (_). The name must start with a letter.
         * <p>
         * @return {@code this}
         * @param slsGroupName Property slsGroupName: The name of the Logstore group.The name must be 2 to 32 characters in length and can contain uppercase letters, lowercase letters, digits, and underscores (_). The name must start with a letter. This parameter is required.
         */
        public Builder slsGroupName(final com.aliyun.ros.cdk.core.IResolvable slsGroupName) {
            this.props.slsGroupName(slsGroupName);
            return this;
        }

        /**
         * Property slsGroupDescription: The description of the Logstore group.
         * <p>
         * @return {@code this}
         * @param slsGroupDescription Property slsGroupDescription: The description of the Logstore group. This parameter is required.
         */
        public Builder slsGroupDescription(final java.lang.String slsGroupDescription) {
            this.props.slsGroupDescription(slsGroupDescription);
            return this;
        }
        /**
         * Property slsGroupDescription: The description of the Logstore group.
         * <p>
         * @return {@code this}
         * @param slsGroupDescription Property slsGroupDescription: The description of the Logstore group. This parameter is required.
         */
        public Builder slsGroupDescription(final com.aliyun.ros.cdk.core.IResolvable slsGroupDescription) {
            this.props.slsGroupDescription(slsGroupDescription);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cms.SlsGroup}.
         */
        @Override
        public com.aliyun.ros.cdk.cms.SlsGroup build() {
            return new com.aliyun.ros.cdk.cms.SlsGroup(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
