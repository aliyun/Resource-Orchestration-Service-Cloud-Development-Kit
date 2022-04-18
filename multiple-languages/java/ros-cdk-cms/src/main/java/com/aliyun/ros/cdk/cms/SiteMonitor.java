package com.aliyun.ros.cdk.cms;

/**
 * A ROS resource type:  `ALIYUN::CMS::SiteMonitor`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.56.0 (build 55e7d15)", date = "2022-04-18T07:25:24.917Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms.$Module.class, fqn = "@alicloud/ros-cdk-cms.SiteMonitor")
public class SiteMonitor extends com.aliyun.ros.cdk.core.Resource {

    protected SiteMonitor(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected SiteMonitor(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::CMS::SiteMonitor`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public SiteMonitor(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cms.SiteMonitorProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::CMS::SiteMonitor`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public SiteMonitor(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cms.SiteMonitorProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute TaskId: The ID of the site monitoring task.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTaskId() {
        return software.amazon.jsii.Kernel.get(this, "attrTaskId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cms.SiteMonitor}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cms.SiteMonitor> {
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
        private final com.aliyun.ros.cdk.cms.SiteMonitorProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cms.SiteMonitorProps.Builder();
        }

        /**
         * Property address: The URL or IP address monitored by the monitoring task.
         * <p>
         * @return {@code this}
         * @param address Property address: The URL or IP address monitored by the monitoring task. This parameter is required.
         */
        public Builder address(final java.lang.String address) {
            this.props.address(address);
            return this;
        }
        /**
         * Property address: The URL or IP address monitored by the monitoring task.
         * <p>
         * @return {@code this}
         * @param address Property address: The URL or IP address monitored by the monitoring task. This parameter is required.
         */
        public Builder address(final com.aliyun.ros.cdk.core.IResolvable address) {
            this.props.address(address);
            return this;
        }

        /**
         * Property taskName: The name of the site monitoring task.
         * <p>
         * The name must be 4 to 100 characters in length.
         * It can contain letters, digits, and underscores (_).
         * <p>
         * @return {@code this}
         * @param taskName Property taskName: The name of the site monitoring task. This parameter is required.
         */
        public Builder taskName(final java.lang.String taskName) {
            this.props.taskName(taskName);
            return this;
        }
        /**
         * Property taskName: The name of the site monitoring task.
         * <p>
         * The name must be 4 to 100 characters in length.
         * It can contain letters, digits, and underscores (_).
         * <p>
         * @return {@code this}
         * @param taskName Property taskName: The name of the site monitoring task. This parameter is required.
         */
        public Builder taskName(final com.aliyun.ros.cdk.core.IResolvable taskName) {
            this.props.taskName(taskName);
            return this;
        }

        /**
         * Property taskType: The protocol used by the site monitoring task.
         * <p>
         * Valid values: HTTP, HTTPS, PING, TCP,
         * UDP, DNS, SMTP, POP3, and FTP.
         * <p>
         * @return {@code this}
         * @param taskType Property taskType: The protocol used by the site monitoring task. This parameter is required.
         */
        public Builder taskType(final java.lang.String taskType) {
            this.props.taskType(taskType);
            return this;
        }
        /**
         * Property taskType: The protocol used by the site monitoring task.
         * <p>
         * Valid values: HTTP, HTTPS, PING, TCP,
         * UDP, DNS, SMTP, POP3, and FTP.
         * <p>
         * @return {@code this}
         * @param taskType Property taskType: The protocol used by the site monitoring task. This parameter is required.
         */
        public Builder taskType(final com.aliyun.ros.cdk.core.IResolvable taskType) {
            this.props.taskType(taskType);
            return this;
        }

        /**
         * Property alertIds:.
         * <p>
         * @return {@code this}
         * @param alertIds Property alertIds:. This parameter is required.
         */
        public Builder alertIds(final com.aliyun.ros.cdk.core.IResolvable alertIds) {
            this.props.alertIds(alertIds);
            return this;
        }
        /**
         * Property alertIds:.
         * <p>
         * @return {@code this}
         * @param alertIds Property alertIds:. This parameter is required.
         */
        public Builder alertIds(final java.util.List<? extends java.lang.Object> alertIds) {
            this.props.alertIds(alertIds);
            return this;
        }

        /**
         * Property interval: The interval at which detection requests are sent.
         * <p>
         * Valid values: 1, 5, and 15. Unit:
         * minutes. Default value: 1.
         * <p>
         * @return {@code this}
         * @param interval Property interval: The interval at which detection requests are sent. This parameter is required.
         */
        public Builder interval(final java.lang.Number interval) {
            this.props.interval(interval);
            return this;
        }
        /**
         * Property interval: The interval at which detection requests are sent.
         * <p>
         * Valid values: 1, 5, and 15. Unit:
         * minutes. Default value: 1.
         * <p>
         * @return {@code this}
         * @param interval Property interval: The interval at which detection requests are sent. This parameter is required.
         */
        public Builder interval(final com.aliyun.ros.cdk.core.IResolvable interval) {
            this.props.interval(interval);
            return this;
        }

        /**
         * Property ispCities: The information about detection points, which is specified in a JSON array.
         * <p>
         * Example:
         * [{"city":"546","isp":"465"},{"city":"572","isp":"465"},{"city":"738","isp":"465"}]. The three city codes represent Beijing, Hangzhou, and Qingdao.
         * Note You can call the DescribeSiteMonitorISPCityList API operation to query the detection
         * points that can be used to create site monitoring tasks. For more information, see
         * DescribeSiteMonitorISPCityList . If this parameter is not specified, the system randomly selects three detection
         * points for site monitoring.
         * <p>
         * @return {@code this}
         * @param ispCities Property ispCities: The information about detection points, which is specified in a JSON array. This parameter is required.
         */
        public Builder ispCities(final com.aliyun.ros.cdk.core.IResolvable ispCities) {
            this.props.ispCities(ispCities);
            return this;
        }
        /**
         * Property ispCities: The information about detection points, which is specified in a JSON array.
         * <p>
         * Example:
         * [{"city":"546","isp":"465"},{"city":"572","isp":"465"},{"city":"738","isp":"465"}]. The three city codes represent Beijing, Hangzhou, and Qingdao.
         * Note You can call the DescribeSiteMonitorISPCityList API operation to query the detection
         * points that can be used to create site monitoring tasks. For more information, see
         * DescribeSiteMonitorISPCityList . If this parameter is not specified, the system randomly selects three detection
         * points for site monitoring.
         * <p>
         * @return {@code this}
         * @param ispCities Property ispCities: The information about detection points, which is specified in a JSON array. This parameter is required.
         */
        public Builder ispCities(final java.util.List<? extends java.lang.Object> ispCities) {
            this.props.ispCities(ispCities);
            return this;
        }

        /**
         * Property optionsJson: The extended options of the protocol that is used by the site monitoring task.
         * <p>
         * The
         * options vary based on the protocol.
         * <p>
         * @return {@code this}
         * @param optionsJson Property optionsJson: The extended options of the protocol that is used by the site monitoring task. This parameter is required.
         */
        public Builder optionsJson(final java.lang.String optionsJson) {
            this.props.optionsJson(optionsJson);
            return this;
        }
        /**
         * Property optionsJson: The extended options of the protocol that is used by the site monitoring task.
         * <p>
         * The
         * options vary based on the protocol.
         * <p>
         * @return {@code this}
         * @param optionsJson Property optionsJson: The extended options of the protocol that is used by the site monitoring task. This parameter is required.
         */
        public Builder optionsJson(final com.aliyun.ros.cdk.core.IResolvable optionsJson) {
            this.props.optionsJson(optionsJson);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.cms.SiteMonitor}.
         */
        @Override
        public com.aliyun.ros.cdk.cms.SiteMonitor build() {
            return new com.aliyun.ros.cdk.cms.SiteMonitor(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
