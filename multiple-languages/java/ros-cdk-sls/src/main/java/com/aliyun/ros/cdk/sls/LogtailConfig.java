package com.aliyun.ros.cdk.sls;

/**
 * A ROS resource type:  <code>ALIYUN::SLS::LogtailConfig</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.84.0 (build 5404dcf)", date = "2023-06-28T08:22:30.571Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sls.$Module.class, fqn = "@alicloud/ros-cdk-sls.LogtailConfig")
public class LogtailConfig extends com.aliyun.ros.cdk.core.Resource {

    protected LogtailConfig(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected LogtailConfig(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>ALIYUN::SLS::LogtailConfig</code>.
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
    public LogtailConfig(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sls.LogtailConfigProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>ALIYUN::SLS::LogtailConfig</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public LogtailConfig(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sls.LogtailConfigProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AppliedMachineGroups: Applied machine groups.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAppliedMachineGroups() {
        return software.amazon.jsii.Kernel.get(this, "attrAppliedMachineGroups", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Endpoint: Endpoint address.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrEndpoint() {
        return software.amazon.jsii.Kernel.get(this, "attrEndpoint", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute LogtailConfigName: Logtail config name.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrLogtailConfigName() {
        return software.amazon.jsii.Kernel.get(this, "attrLogtailConfigName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.sls.LogtailConfig}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.sls.LogtailConfig> {
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
        private final com.aliyun.ros.cdk.sls.LogtailConfigProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.sls.LogtailConfigProps.Builder();
        }

        /**
         * Property logstoreName: Logstore name: 1.
         * <p>
         * Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
         * 2. Must start and end with lowercase letters and numbers.
         * 3. The name length is 3-63 characters.
         * <p>
         * @return {@code this}
         * @param logstoreName Property logstoreName: Logstore name: 1. This parameter is required.
         */
        public Builder logstoreName(final java.lang.String logstoreName) {
            this.props.logstoreName(logstoreName);
            return this;
        }
        /**
         * Property logstoreName: Logstore name: 1.
         * <p>
         * Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
         * 2. Must start and end with lowercase letters and numbers.
         * 3. The name length is 3-63 characters.
         * <p>
         * @return {@code this}
         * @param logstoreName Property logstoreName: Logstore name: 1. This parameter is required.
         */
        public Builder logstoreName(final com.aliyun.ros.cdk.core.IResolvable logstoreName) {
            this.props.logstoreName(logstoreName);
            return this;
        }

        /**
         * Property logtailConfigName: Logtail config name: 1.
         * <p>
         * Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
         * 2. Must start and end with lowercase letters and numbers.
         * 3. The name length is 3-63 characters.
         * <p>
         * @return {@code this}
         * @param logtailConfigName Property logtailConfigName: Logtail config name: 1. This parameter is required.
         */
        public Builder logtailConfigName(final java.lang.String logtailConfigName) {
            this.props.logtailConfigName(logtailConfigName);
            return this;
        }
        /**
         * Property logtailConfigName: Logtail config name: 1.
         * <p>
         * Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
         * 2. Must start and end with lowercase letters and numbers.
         * 3. The name length is 3-63 characters.
         * <p>
         * @return {@code this}
         * @param logtailConfigName Property logtailConfigName: Logtail config name: 1. This parameter is required.
         */
        public Builder logtailConfigName(final com.aliyun.ros.cdk.core.IResolvable logtailConfigName) {
            this.props.logtailConfigName(logtailConfigName);
            return this;
        }

        /**
         * Property projectName: Project name: 1.
         * <p>
         * Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
         * 2. Must start and end with lowercase letters and numbers.
         * 3. The name length is 3-63 characters.
         * <p>
         * @return {@code this}
         * @param projectName Property projectName: Project name: 1. This parameter is required.
         */
        public Builder projectName(final java.lang.String projectName) {
            this.props.projectName(projectName);
            return this;
        }
        /**
         * Property projectName: Project name: 1.
         * <p>
         * Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
         * 2. Must start and end with lowercase letters and numbers.
         * 3. The name length is 3-63 characters.
         * <p>
         * @return {@code this}
         * @param projectName Property projectName: Project name: 1. This parameter is required.
         */
        public Builder projectName(final com.aliyun.ros.cdk.core.IResolvable projectName) {
            this.props.projectName(projectName);
            return this;
        }

        /**
         * Property cloneFrom: Clone logtail config data from existing logtail config.
         * <p>
         * Either CloneFrom or RawConfigData must be specified. If CloneFrom and RawConfigData are both specified, logtail config data will be merged from both with RawConfigData first.
         * <p>
         * @return {@code this}
         * @param cloneFrom Property cloneFrom: Clone logtail config data from existing logtail config. This parameter is required.
         */
        public Builder cloneFrom(final com.aliyun.ros.cdk.core.IResolvable cloneFrom) {
            this.props.cloneFrom(cloneFrom);
            return this;
        }
        /**
         * Property cloneFrom: Clone logtail config data from existing logtail config.
         * <p>
         * Either CloneFrom or RawConfigData must be specified. If CloneFrom and RawConfigData are both specified, logtail config data will be merged from both with RawConfigData first.
         * <p>
         * @return {@code this}
         * @param cloneFrom Property cloneFrom: Clone logtail config data from existing logtail config. This parameter is required.
         */
        public Builder cloneFrom(final com.aliyun.ros.cdk.sls.RosLogtailConfig.CloneFromProperty cloneFrom) {
            this.props.cloneFrom(cloneFrom);
            return this;
        }

        /**
         * Property rawConfigData: The format is the same as the response of SLS API GetConfig.
         * <p>
         * Either CloneFrom or RawConfigData must be specified. If CloneFrom and RawConfigData are both specified, logtail config data will be merged from both with RawConfigData first.
         * configName, outputType, outputDetail in data will be ignored.For example:
         * {
         * "configName": "test-logtail-config",
         * "createTime": 1574843554,
         * "inputDetail": {
         * "acceptNoEnoughKeys": false,
         * "adjustTimezone": false,
         * "advanced": {
         * "force_multiconfig": false
         * },
         * "autoExtend": true,
         * "delayAlarmBytes": 0,
         * "delaySkipBytes": 0,
         * "discardNonUtf8": false,
         * "discardUnmatch": false,
         * "dockerExcludeEnv": {},
         * "dockerExcludeLabel": {},
         * "dockerFile": false,
         * "dockerIncludeEnv": {},
         * "dockerIncludeLabel": {},
         * "enableRawLog": false,
         * "enableTag": false,
         * "fileEncoding": "utf8",
         * "filePattern": "test.log*",
         * "filterKey": [],
         * "filterRegex": [],
         * "key": [
         * "time",
         * "logger",
         * "level",
         * "request_id",
         * "user_id",
         * "region_id",
         * "content"
         * ],
         * "localStorage": true,
         * "logPath": "/var/log/test",
         * "logTimezone": "",
         * "logType": "delimiter_log",
         * "maxDepth": 100,
         * "maxSendRate": -1,
         * "mergeType": "topic",
         * "preserve": true,
         * "preserveDepth": 1,
         * "priority": 0,
         * "quote": "\u0001",
         * "sendRateExpire": 0,
         * "sensitive_keys": [],
         * "separator": ",,,",
         * "shardHashKey": [],
         * "tailExisted": false,
         * "timeFormat": "",
         * "timeKey": "",
         * "topicFormat": "none"
         * },
         * "inputType": "file",
         * "lastModifyTime": 1574843554,
         * "logSample": "2019-11-27 10:48:23,160,,,MAIN,,,INFO,,,98DCC51D-BE5D-49C7-B3FD-37B2BAEFB296,,,123456789,,,cn-hangzhou,,,this is a simple test.",
         * "outputDetail": {
         * "endpoint": "cn-hangzhou-intranet.log.aliyuncs.com",
         * "logstoreName": "test-logstore",
         * "region": "cn-hangzhou"
         * },
         * "outputType": "LogService"
         * }
         * <p>
         * @return {@code this}
         * @param rawConfigData Property rawConfigData: The format is the same as the response of SLS API GetConfig. This parameter is required.
         */
        public Builder rawConfigData(final com.aliyun.ros.cdk.core.IResolvable rawConfigData) {
            this.props.rawConfigData(rawConfigData);
            return this;
        }
        /**
         * Property rawConfigData: The format is the same as the response of SLS API GetConfig.
         * <p>
         * Either CloneFrom or RawConfigData must be specified. If CloneFrom and RawConfigData are both specified, logtail config data will be merged from both with RawConfigData first.
         * configName, outputType, outputDetail in data will be ignored.For example:
         * {
         * "configName": "test-logtail-config",
         * "createTime": 1574843554,
         * "inputDetail": {
         * "acceptNoEnoughKeys": false,
         * "adjustTimezone": false,
         * "advanced": {
         * "force_multiconfig": false
         * },
         * "autoExtend": true,
         * "delayAlarmBytes": 0,
         * "delaySkipBytes": 0,
         * "discardNonUtf8": false,
         * "discardUnmatch": false,
         * "dockerExcludeEnv": {},
         * "dockerExcludeLabel": {},
         * "dockerFile": false,
         * "dockerIncludeEnv": {},
         * "dockerIncludeLabel": {},
         * "enableRawLog": false,
         * "enableTag": false,
         * "fileEncoding": "utf8",
         * "filePattern": "test.log*",
         * "filterKey": [],
         * "filterRegex": [],
         * "key": [
         * "time",
         * "logger",
         * "level",
         * "request_id",
         * "user_id",
         * "region_id",
         * "content"
         * ],
         * "localStorage": true,
         * "logPath": "/var/log/test",
         * "logTimezone": "",
         * "logType": "delimiter_log",
         * "maxDepth": 100,
         * "maxSendRate": -1,
         * "mergeType": "topic",
         * "preserve": true,
         * "preserveDepth": 1,
         * "priority": 0,
         * "quote": "\u0001",
         * "sendRateExpire": 0,
         * "sensitive_keys": [],
         * "separator": ",,,",
         * "shardHashKey": [],
         * "tailExisted": false,
         * "timeFormat": "",
         * "timeKey": "",
         * "topicFormat": "none"
         * },
         * "inputType": "file",
         * "lastModifyTime": 1574843554,
         * "logSample": "2019-11-27 10:48:23,160,,,MAIN,,,INFO,,,98DCC51D-BE5D-49C7-B3FD-37B2BAEFB296,,,123456789,,,cn-hangzhou,,,this is a simple test.",
         * "outputDetail": {
         * "endpoint": "cn-hangzhou-intranet.log.aliyuncs.com",
         * "logstoreName": "test-logstore",
         * "region": "cn-hangzhou"
         * },
         * "outputType": "LogService"
         * }
         * <p>
         * @return {@code this}
         * @param rawConfigData Property rawConfigData: The format is the same as the response of SLS API GetConfig. This parameter is required.
         */
        public Builder rawConfigData(final java.util.Map<java.lang.String, ? extends java.lang.Object> rawConfigData) {
            this.props.rawConfigData(rawConfigData);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.sls.LogtailConfig}.
         */
        @Override
        public com.aliyun.ros.cdk.sls.LogtailConfig build() {
            return new com.aliyun.ros.cdk.sls.LogtailConfig(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
