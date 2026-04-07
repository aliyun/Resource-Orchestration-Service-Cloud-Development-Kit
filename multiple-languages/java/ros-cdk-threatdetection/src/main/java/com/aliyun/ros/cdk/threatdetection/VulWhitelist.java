package com.aliyun.ros.cdk.threatdetection;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ThreatDetection::VulWhitelist</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:30.651Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.threatdetection.$Module.class, fqn = "@alicloud/ros-cdk-threatdetection.VulWhitelist")
public class VulWhitelist extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.threatdetection.IVulWhitelist {

    protected VulWhitelist(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected VulWhitelist(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public VulWhitelist(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.VulWhitelistProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public VulWhitelist(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.VulWhitelistProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Reason: The reason why you add the vulnerability to the whitelist.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrReason() {
        return software.amazon.jsii.Kernel.get(this, "attrReason", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute TargetInfo: The applicable scope of the whitelist.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTargetInfo() {
        return software.amazon.jsii.Kernel.get(this, "attrTargetInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute VulWhitelistId: The ID of the whitelist.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVulWhitelistId() {
        return software.amazon.jsii.Kernel.get(this, "attrVulWhitelistId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Whitelist: The information about the vulnerability that you want to add to the whitelist.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrWhitelist() {
        return software.amazon.jsii.Kernel.get(this, "attrWhitelist", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.VulWhitelistProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.threatdetection.VulWhitelistProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.threatdetection.VulWhitelist}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.threatdetection.VulWhitelist> {
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
        private final com.aliyun.ros.cdk.threatdetection.VulWhitelistProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.threatdetection.VulWhitelistProps.Builder();
        }

        /**
         * Property targetInfo: The applicable scope of the whitelist.
         * <p>
         * The value of this parameter is in the JSON format and contains the following fields:
         * <p>
         * <ul>
         * <li><strong>type</strong>: the type of the applicable scope. Valid values:
         * <p>
         * <ul>
         * <li><strong>GroupId</strong>: the ID of a server group.</li>
         * <li><strong>Uuid</strong>: the UUID of a server.</li>
         * </ul></li>
         * <li><strong>uuids</strong>: the UUIDs of servers. This field is of the string type.</li>
         * <li><strong>groupIds</strong>: the IDs of server groups. This field is of the long type.</li>
         * </ul>
         * <p>
         * <blockquote>
         * <p>
         * If you leave this parameter empty, the applicable scope is all servers. If you set the <strong>type</strong> field to <strong>GroupId</strong>, you must also specify the <strong>groupIds</strong> field. If you set the <strong>type</strong> field to <strong>Uuid</strong>, you must also specify the <strong>uuids</strong> field.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param targetInfo Property targetInfo: The applicable scope of the whitelist. This parameter is required.
         */
        public Builder targetInfo(final com.aliyun.ros.cdk.core.IResolvable targetInfo) {
            this.props.targetInfo(targetInfo);
            return this;
        }
        /**
         * Property targetInfo: The applicable scope of the whitelist.
         * <p>
         * The value of this parameter is in the JSON format and contains the following fields:
         * <p>
         * <ul>
         * <li><strong>type</strong>: the type of the applicable scope. Valid values:
         * <p>
         * <ul>
         * <li><strong>GroupId</strong>: the ID of a server group.</li>
         * <li><strong>Uuid</strong>: the UUID of a server.</li>
         * </ul></li>
         * <li><strong>uuids</strong>: the UUIDs of servers. This field is of the string type.</li>
         * <li><strong>groupIds</strong>: the IDs of server groups. This field is of the long type.</li>
         * </ul>
         * <p>
         * <blockquote>
         * <p>
         * If you leave this parameter empty, the applicable scope is all servers. If you set the <strong>type</strong> field to <strong>GroupId</strong>, you must also specify the <strong>groupIds</strong> field. If you set the <strong>type</strong> field to <strong>Uuid</strong>, you must also specify the <strong>uuids</strong> field.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param targetInfo Property targetInfo: The applicable scope of the whitelist. This parameter is required.
         */
        public Builder targetInfo(final java.util.Map<java.lang.String, ? extends java.lang.Object> targetInfo) {
            this.props.targetInfo(targetInfo);
            return this;
        }

        /**
         * Property whitelist: The information about the vulnerability that you want to add to the whitelist.
         * <p>
         * The value is a JSON string that contains the following fields:
         * <p>
         * <ul>
         * <li><strong>Status</strong>: the status of the vulnerability.</li>
         * <li><strong>GmtLast</strong>: the timestamp when the vulnerability was last detected. Unit: milliseconds.</li>
         * <li><strong>LaterCount</strong>: the number of vulnerabilities that have the medium priority.</li>
         * <li><strong>AsapCount</strong>: the number of vulnerabilities that have the high priority.</li>
         * <li><strong>Name</strong>: the name of the vulnerability.</li>
         * <li><strong>Type</strong>: the type of the vulnerability. Valid values:
         * <p>
         * <ul>
         * <li><strong>cve</strong>: Linux software vulnerability</li>
         * <li><strong>sys</strong>: Windows system vulnerability</li>
         * <li><strong>cms</strong>: Web-CMS vulnerability</li>
         * <li><strong>app</strong>: application vulnerability</li>
         * <li><strong>emg</strong>: urgent vulnerability</li>
         * </ul></li>
         * <li><strong>Related</strong>: the Common Vulnerabilities and Exposures (CVE) ID of the vulnerability.</li>
         * <li><strong>HandledCount</strong>: the number of handled vulnerabilities.</li>
         * <li><strong>AliasName</strong>: the alias of the vulnerability.</li>
         * <li><strong>RuleModifyTime</strong>: the time when the vulnerability was last disclosed.</li>
         * <li><strong>NntfCount</strong>: the number of vulnerabilities that have the low priority.</li>
         * <li><strong>TotalFixCount</strong>: the total number of fixed vulnerabilities.</li>
         * <li><strong>Tags</strong>: the tag that is added to the vulnerability.</li>
         * </ul>
         * <p>
         * <blockquote>
         * <p>
         * You can call the <a href="~~DescribeGroupedVul~~">DescribeGroupedVul</a> operation to query the information about the vulnerability that you want to add to the whitelist.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param whitelist Property whitelist: The information about the vulnerability that you want to add to the whitelist. This parameter is required.
         */
        public Builder whitelist(final com.aliyun.ros.cdk.core.IResolvable whitelist) {
            this.props.whitelist(whitelist);
            return this;
        }
        /**
         * Property whitelist: The information about the vulnerability that you want to add to the whitelist.
         * <p>
         * The value is a JSON string that contains the following fields:
         * <p>
         * <ul>
         * <li><strong>Status</strong>: the status of the vulnerability.</li>
         * <li><strong>GmtLast</strong>: the timestamp when the vulnerability was last detected. Unit: milliseconds.</li>
         * <li><strong>LaterCount</strong>: the number of vulnerabilities that have the medium priority.</li>
         * <li><strong>AsapCount</strong>: the number of vulnerabilities that have the high priority.</li>
         * <li><strong>Name</strong>: the name of the vulnerability.</li>
         * <li><strong>Type</strong>: the type of the vulnerability. Valid values:
         * <p>
         * <ul>
         * <li><strong>cve</strong>: Linux software vulnerability</li>
         * <li><strong>sys</strong>: Windows system vulnerability</li>
         * <li><strong>cms</strong>: Web-CMS vulnerability</li>
         * <li><strong>app</strong>: application vulnerability</li>
         * <li><strong>emg</strong>: urgent vulnerability</li>
         * </ul></li>
         * <li><strong>Related</strong>: the Common Vulnerabilities and Exposures (CVE) ID of the vulnerability.</li>
         * <li><strong>HandledCount</strong>: the number of handled vulnerabilities.</li>
         * <li><strong>AliasName</strong>: the alias of the vulnerability.</li>
         * <li><strong>RuleModifyTime</strong>: the time when the vulnerability was last disclosed.</li>
         * <li><strong>NntfCount</strong>: the number of vulnerabilities that have the low priority.</li>
         * <li><strong>TotalFixCount</strong>: the total number of fixed vulnerabilities.</li>
         * <li><strong>Tags</strong>: the tag that is added to the vulnerability.</li>
         * </ul>
         * <p>
         * <blockquote>
         * <p>
         * You can call the <a href="~~DescribeGroupedVul~~">DescribeGroupedVul</a> operation to query the information about the vulnerability that you want to add to the whitelist.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param whitelist Property whitelist: The information about the vulnerability that you want to add to the whitelist. This parameter is required.
         */
        public Builder whitelist(final java.util.Map<java.lang.String, ? extends java.lang.Object> whitelist) {
            this.props.whitelist(whitelist);
            return this;
        }

        /**
         * Property reason: The reason why you add the vulnerability to the whitelist.
         * <p>
         * @return {@code this}
         * @param reason Property reason: The reason why you add the vulnerability to the whitelist. This parameter is required.
         */
        public Builder reason(final java.lang.String reason) {
            this.props.reason(reason);
            return this;
        }
        /**
         * Property reason: The reason why you add the vulnerability to the whitelist.
         * <p>
         * @return {@code this}
         * @param reason Property reason: The reason why you add the vulnerability to the whitelist. This parameter is required.
         */
        public Builder reason(final com.aliyun.ros.cdk.core.IResolvable reason) {
            this.props.reason(reason);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.threatdetection.VulWhitelist}.
         */
        @Override
        public com.aliyun.ros.cdk.threatdetection.VulWhitelist build() {
            return new com.aliyun.ros.cdk.threatdetection.VulWhitelist(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
