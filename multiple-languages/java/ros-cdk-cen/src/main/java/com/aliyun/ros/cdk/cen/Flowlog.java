package com.aliyun.ros.cdk.cen;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::CEN::Flowlog</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:21.813Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cen.$Module.class, fqn = "@alicloud/ros-cdk-cen.Flowlog")
public class Flowlog extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.cen.IFlowlog {

    protected Flowlog(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Flowlog(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Flowlog(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.FlowlogProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Flowlog(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.FlowlogProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute CenId: The ID of the CEN instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCenId() {
        return software.amazon.jsii.Kernel.get(this, "attrCenId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CreateTime: The time when the flow log was created.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Description: The description of the flow log.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute FlowLogId: The ID of the flow log.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrFlowLogId() {
        return software.amazon.jsii.Kernel.get(this, "attrFlowLogId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute FlowLogName: The flow log name.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrFlowLogName() {
        return software.amazon.jsii.Kernel.get(this, "attrFlowLogName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute FlowLogVersion: The flow log version.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrFlowLogVersion() {
        return software.amazon.jsii.Kernel.get(this, "attrFlowLogVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Interval: The time window for collecting log data.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInterval() {
        return software.amazon.jsii.Kernel.get(this, "attrInterval", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute LogFormatString: The strings that define the fields in the flow log.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrLogFormatString() {
        return software.amazon.jsii.Kernel.get(this, "attrLogFormatString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute LogStoreName: The Logstore that stores the captured traffic data.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrLogStoreName() {
        return software.amazon.jsii.Kernel.get(this, "attrLogStoreName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ProjectName: The project that stores the captured traffic data.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrProjectName() {
        return software.amazon.jsii.Kernel.get(this, "attrProjectName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Tags: The tag of the flow log.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
        return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute TransitRouterAttachmentId: The ID of the VPC connection, VPN connection, VBR connection, ECR connection, or inter-region connection.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterAttachmentId() {
        return software.amazon.jsii.Kernel.get(this, "attrTransitRouterAttachmentId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute TransitRouterId: The ID of the transit router.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterId() {
        return software.amazon.jsii.Kernel.get(this, "attrTransitRouterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.FlowlogProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cen.FlowlogProps.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cen.Flowlog}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cen.Flowlog> {
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
        private final com.aliyun.ros.cdk.cen.FlowlogProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cen.FlowlogProps.Builder();
        }

        /**
         * Property cenId: The ID of the CEN instance.
         * <p>
         * @return {@code this}
         * @param cenId Property cenId: The ID of the CEN instance. This parameter is required.
         */
        public Builder cenId(final java.lang.String cenId) {
            this.props.cenId(cenId);
            return this;
        }
        /**
         * Property cenId: The ID of the CEN instance.
         * <p>
         * @return {@code this}
         * @param cenId Property cenId: The ID of the CEN instance. This parameter is required.
         */
        public Builder cenId(final com.aliyun.ros.cdk.core.IResolvable cenId) {
            this.props.cenId(cenId);
            return this;
        }

        /**
         * Property description: The description of the flow log.
         * <p>
         * The description is optional. If you enter a description, it must be 1 to 256 characters in length, and cannot start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the flow log. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of the flow log.
         * <p>
         * The description is optional. If you enter a description, it must be 1 to 256 characters in length, and cannot start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the flow log. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property flowLogName: The flow log name.
         * <p>
         * The name can be empty or 1 to 128 characters in length, and cannot start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param flowLogName Property flowLogName: The flow log name. This parameter is required.
         */
        public Builder flowLogName(final java.lang.String flowLogName) {
            this.props.flowLogName(flowLogName);
            return this;
        }
        /**
         * Property flowLogName: The flow log name.
         * <p>
         * The name can be empty or 1 to 128 characters in length, and cannot start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param flowLogName Property flowLogName: The flow log name. This parameter is required.
         */
        public Builder flowLogName(final com.aliyun.ros.cdk.core.IResolvable flowLogName) {
            this.props.flowLogName(flowLogName);
            return this;
        }

        /**
         * Property interval: The time window for collecting log data.
         * <p>
         * Unit: seconds. Valid values: 60 and 600. Default value: 600.
         * <p>
         * @return {@code this}
         * @param interval Property interval: The time window for collecting log data. This parameter is required.
         */
        public Builder interval(final java.lang.Number interval) {
            this.props.interval(interval);
            return this;
        }
        /**
         * Property interval: The time window for collecting log data.
         * <p>
         * Unit: seconds. Valid values: 60 and 600. Default value: 600.
         * <p>
         * @return {@code this}
         * @param interval Property interval: The time window for collecting log data. This parameter is required.
         */
        public Builder interval(final com.aliyun.ros.cdk.core.IResolvable interval) {
            this.props.interval(interval);
            return this;
        }

        /**
         * Property logFormatString: The strings that define the fields in the flow log.
         * <p>
         * Format: ${Field 1}${Field 2}${Field 3}...{Field n}
         * <p>
         * <ul>
         * <li>If you do not configure this parameter, all fields are included in the flow log.</li>
         * <li>If you configure this parameter, start the string with ${srcaddr}${dstaddr}${bytes} because ${srcaddr}${dstaddr}${bytes} are required variables.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param logFormatString Property logFormatString: The strings that define the fields in the flow log. This parameter is required.
         */
        public Builder logFormatString(final java.lang.String logFormatString) {
            this.props.logFormatString(logFormatString);
            return this;
        }
        /**
         * Property logFormatString: The strings that define the fields in the flow log.
         * <p>
         * Format: ${Field 1}${Field 2}${Field 3}...{Field n}
         * <p>
         * <ul>
         * <li>If you do not configure this parameter, all fields are included in the flow log.</li>
         * <li>If you configure this parameter, start the string with ${srcaddr}${dstaddr}${bytes} because ${srcaddr}${dstaddr}${bytes} are required variables.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param logFormatString Property logFormatString: The strings that define the fields in the flow log. This parameter is required.
         */
        public Builder logFormatString(final com.aliyun.ros.cdk.core.IResolvable logFormatString) {
            this.props.logFormatString(logFormatString);
            return this;
        }

        /**
         * Property logStoreName: The Logstore that stores the captured traffic data.
         * <p>
         * <ul>
         * <li>If a Logstore is already created in the selected region, enter the name of the Logstore.</li>
         * <li>If no Logstores are created in the selected region, enter a name and the system automatically creates a Logstore. The name of the Logstore. The name must meet the following requirements:
         * ** The name must be unique in a project.
         * ** The name can contain only lowercase letters, digits, hyphens (-), and underscores (_).
         * ** The name must start and end with a lowercase letter or a digit.
         * ** The name must be 3 to 63 characters in length.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param logStoreName Property logStoreName: The Logstore that stores the captured traffic data. This parameter is required.
         */
        public Builder logStoreName(final java.lang.String logStoreName) {
            this.props.logStoreName(logStoreName);
            return this;
        }
        /**
         * Property logStoreName: The Logstore that stores the captured traffic data.
         * <p>
         * <ul>
         * <li>If a Logstore is already created in the selected region, enter the name of the Logstore.</li>
         * <li>If no Logstores are created in the selected region, enter a name and the system automatically creates a Logstore. The name of the Logstore. The name must meet the following requirements:
         * ** The name must be unique in a project.
         * ** The name can contain only lowercase letters, digits, hyphens (-), and underscores (_).
         * ** The name must start and end with a lowercase letter or a digit.
         * ** The name must be 3 to 63 characters in length.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param logStoreName Property logStoreName: The Logstore that stores the captured traffic data. This parameter is required.
         */
        public Builder logStoreName(final com.aliyun.ros.cdk.core.IResolvable logStoreName) {
            this.props.logStoreName(logStoreName);
            return this;
        }

        /**
         * Property projectName: The project that stores the captured traffic data.
         * <p>
         * <ul>
         * <li>If a project is already created in the selected region, enter the name of the project.</li>
         * <li>If no projects are created in the selected region, enter a name and the system automatically creates a project.
         * The project name must be unique in a region. You cannot change the name after the project is created. The name must meet the following requirements:
         * ** The name must be globally unique.
         * ** The name can contain only lowercase letters, digits, and hyphens (-).
         * ** The name must start and end with a lowercase letter or a digit.
         * ** The name must be 3 to 63 characters in length.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param projectName Property projectName: The project that stores the captured traffic data. This parameter is required.
         */
        public Builder projectName(final java.lang.String projectName) {
            this.props.projectName(projectName);
            return this;
        }
        /**
         * Property projectName: The project that stores the captured traffic data.
         * <p>
         * <ul>
         * <li>If a project is already created in the selected region, enter the name of the project.</li>
         * <li>If no projects are created in the selected region, enter a name and the system automatically creates a project.
         * The project name must be unique in a region. You cannot change the name after the project is created. The name must meet the following requirements:
         * ** The name must be globally unique.
         * ** The name can contain only lowercase letters, digits, and hyphens (-).
         * ** The name must start and end with a lowercase letter or a digit.
         * ** The name must be 3 to 63 characters in length.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param projectName Property projectName: The project that stores the captured traffic data. This parameter is required.
         */
        public Builder projectName(final com.aliyun.ros.cdk.core.IResolvable projectName) {
            this.props.projectName(projectName);
            return this;
        }

        /**
         * Property tags: Tags of flow log.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags of flow log. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.cen.RosFlowlog.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * Property transitRouterAttachmentId: The ID of the VPC connection, VPN connection, VBR connection, ECR connection, or inter-region connection.
         * <p>
         * If you create the flow log for a transfer router, skip this parameter.
         * <p>
         * @return {@code this}
         * @param transitRouterAttachmentId Property transitRouterAttachmentId: The ID of the VPC connection, VPN connection, VBR connection, ECR connection, or inter-region connection. This parameter is required.
         */
        public Builder transitRouterAttachmentId(final java.lang.String transitRouterAttachmentId) {
            this.props.transitRouterAttachmentId(transitRouterAttachmentId);
            return this;
        }
        /**
         * Property transitRouterAttachmentId: The ID of the VPC connection, VPN connection, VBR connection, ECR connection, or inter-region connection.
         * <p>
         * If you create the flow log for a transfer router, skip this parameter.
         * <p>
         * @return {@code this}
         * @param transitRouterAttachmentId Property transitRouterAttachmentId: The ID of the VPC connection, VPN connection, VBR connection, ECR connection, or inter-region connection. This parameter is required.
         */
        public Builder transitRouterAttachmentId(final com.aliyun.ros.cdk.core.IResolvable transitRouterAttachmentId) {
            this.props.transitRouterAttachmentId(transitRouterAttachmentId);
            return this;
        }

        /**
         * Property transitRouterId: The ID of the transit router.
         * <p>
         * @return {@code this}
         * @param transitRouterId Property transitRouterId: The ID of the transit router. This parameter is required.
         */
        public Builder transitRouterId(final java.lang.String transitRouterId) {
            this.props.transitRouterId(transitRouterId);
            return this;
        }
        /**
         * Property transitRouterId: The ID of the transit router.
         * <p>
         * @return {@code this}
         * @param transitRouterId Property transitRouterId: The ID of the transit router. This parameter is required.
         */
        public Builder transitRouterId(final com.aliyun.ros.cdk.core.IResolvable transitRouterId) {
            this.props.transitRouterId(transitRouterId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cen.Flowlog}.
         */
        @Override
        public com.aliyun.ros.cdk.cen.Flowlog build() {
            return new com.aliyun.ros.cdk.cen.Flowlog(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
