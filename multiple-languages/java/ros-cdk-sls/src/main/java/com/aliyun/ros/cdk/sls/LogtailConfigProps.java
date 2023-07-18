package com.aliyun.ros.cdk.sls;

/**
 * Properties for defining a <code>ALIYUN::SLS::LogtailConfig</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-07-18T08:28:03.803Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sls.$Module.class, fqn = "@alicloud/ros-cdk-sls.LogtailConfigProps")
@software.amazon.jsii.Jsii.Proxy(LogtailConfigProps.Jsii$Proxy.class)
public interface LogtailConfigProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property logstoreName: Logstore name: 1.
     * <p>
     * Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getLogstoreName();

    /**
     * Property logtailConfigName: Logtail config name: 1.
     * <p>
     * Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getLogtailConfigName();

    /**
     * Property projectName: Project name: 1.
     * <p>
     * Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getProjectName();

    /**
     * Property cloneFrom: Clone logtail config data from existing logtail config.
     * <p>
     * Either CloneFrom or RawConfigData must be specified. If CloneFrom and RawConfigData are both specified, logtail config data will be merged from both with RawConfigData first.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCloneFrom() {
        return null;
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
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRawConfigData() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link LogtailConfigProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link LogtailConfigProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<LogtailConfigProps> {
        java.lang.Object logstoreName;
        java.lang.Object logtailConfigName;
        java.lang.Object projectName;
        java.lang.Object cloneFrom;
        java.lang.Object rawConfigData;

        /**
         * Sets the value of {@link LogtailConfigProps#getLogstoreName}
         * @param logstoreName Property logstoreName: Logstore name: 1. This parameter is required.
         *                     Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
         *                     2. Must start and end with lowercase letters and numbers.
         *                     3. The name length is 3-63 characters.
         * @return {@code this}
         */
        public Builder logstoreName(java.lang.String logstoreName) {
            this.logstoreName = logstoreName;
            return this;
        }

        /**
         * Sets the value of {@link LogtailConfigProps#getLogstoreName}
         * @param logstoreName Property logstoreName: Logstore name: 1. This parameter is required.
         *                     Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
         *                     2. Must start and end with lowercase letters and numbers.
         *                     3. The name length is 3-63 characters.
         * @return {@code this}
         */
        public Builder logstoreName(com.aliyun.ros.cdk.core.IResolvable logstoreName) {
            this.logstoreName = logstoreName;
            return this;
        }

        /**
         * Sets the value of {@link LogtailConfigProps#getLogtailConfigName}
         * @param logtailConfigName Property logtailConfigName: Logtail config name: 1. This parameter is required.
         *                          Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
         *                          2. Must start and end with lowercase letters and numbers.
         *                          3. The name length is 3-63 characters.
         * @return {@code this}
         */
        public Builder logtailConfigName(java.lang.String logtailConfigName) {
            this.logtailConfigName = logtailConfigName;
            return this;
        }

        /**
         * Sets the value of {@link LogtailConfigProps#getLogtailConfigName}
         * @param logtailConfigName Property logtailConfigName: Logtail config name: 1. This parameter is required.
         *                          Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
         *                          2. Must start and end with lowercase letters and numbers.
         *                          3. The name length is 3-63 characters.
         * @return {@code this}
         */
        public Builder logtailConfigName(com.aliyun.ros.cdk.core.IResolvable logtailConfigName) {
            this.logtailConfigName = logtailConfigName;
            return this;
        }

        /**
         * Sets the value of {@link LogtailConfigProps#getProjectName}
         * @param projectName Property projectName: Project name: 1. This parameter is required.
         *                    Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
         *                    2. Must start and end with lowercase letters and numbers.
         *                    3. The name length is 3-63 characters.
         * @return {@code this}
         */
        public Builder projectName(java.lang.String projectName) {
            this.projectName = projectName;
            return this;
        }

        /**
         * Sets the value of {@link LogtailConfigProps#getProjectName}
         * @param projectName Property projectName: Project name: 1. This parameter is required.
         *                    Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
         *                    2. Must start and end with lowercase letters and numbers.
         *                    3. The name length is 3-63 characters.
         * @return {@code this}
         */
        public Builder projectName(com.aliyun.ros.cdk.core.IResolvable projectName) {
            this.projectName = projectName;
            return this;
        }

        /**
         * Sets the value of {@link LogtailConfigProps#getCloneFrom}
         * @param cloneFrom Property cloneFrom: Clone logtail config data from existing logtail config.
         *                  Either CloneFrom or RawConfigData must be specified. If CloneFrom and RawConfigData are both specified, logtail config data will be merged from both with RawConfigData first.
         * @return {@code this}
         */
        public Builder cloneFrom(com.aliyun.ros.cdk.core.IResolvable cloneFrom) {
            this.cloneFrom = cloneFrom;
            return this;
        }

        /**
         * Sets the value of {@link LogtailConfigProps#getCloneFrom}
         * @param cloneFrom Property cloneFrom: Clone logtail config data from existing logtail config.
         *                  Either CloneFrom or RawConfigData must be specified. If CloneFrom and RawConfigData are both specified, logtail config data will be merged from both with RawConfigData first.
         * @return {@code this}
         */
        public Builder cloneFrom(com.aliyun.ros.cdk.sls.RosLogtailConfig.CloneFromProperty cloneFrom) {
            this.cloneFrom = cloneFrom;
            return this;
        }

        /**
         * Sets the value of {@link LogtailConfigProps#getRawConfigData}
         * @param rawConfigData Property rawConfigData: The format is the same as the response of SLS API GetConfig.
         *                      Either CloneFrom or RawConfigData must be specified. If CloneFrom and RawConfigData are both specified, logtail config data will be merged from both with RawConfigData first.
         *                      configName, outputType, outputDetail in data will be ignored.For example:
         *                      {
         *                      "configName": "test-logtail-config",
         *                      "createTime": 1574843554,
         *                      "inputDetail": {
         *                      "acceptNoEnoughKeys": false,
         *                      "adjustTimezone": false,
         *                      "advanced": {
         *                      "force_multiconfig": false
         *                      },
         *                      "autoExtend": true,
         *                      "delayAlarmBytes": 0,
         *                      "delaySkipBytes": 0,
         *                      "discardNonUtf8": false,
         *                      "discardUnmatch": false,
         *                      "dockerExcludeEnv": {},
         *                      "dockerExcludeLabel": {},
         *                      "dockerFile": false,
         *                      "dockerIncludeEnv": {},
         *                      "dockerIncludeLabel": {},
         *                      "enableRawLog": false,
         *                      "enableTag": false,
         *                      "fileEncoding": "utf8",
         *                      "filePattern": "test.log*",
         *                      "filterKey": [],
         *                      "filterRegex": [],
         *                      "key": [
         *                      "time",
         *                      "logger",
         *                      "level",
         *                      "request_id",
         *                      "user_id",
         *                      "region_id",
         *                      "content"
         *                      ],
         *                      "localStorage": true,
         *                      "logPath": "/var/log/test",
         *                      "logTimezone": "",
         *                      "logType": "delimiter_log",
         *                      "maxDepth": 100,
         *                      "maxSendRate": -1,
         *                      "mergeType": "topic",
         *                      "preserve": true,
         *                      "preserveDepth": 1,
         *                      "priority": 0,
         *                      "quote": "\u0001",
         *                      "sendRateExpire": 0,
         *                      "sensitive_keys": [],
         *                      "separator": ",,,",
         *                      "shardHashKey": [],
         *                      "tailExisted": false,
         *                      "timeFormat": "",
         *                      "timeKey": "",
         *                      "topicFormat": "none"
         *                      },
         *                      "inputType": "file",
         *                      "lastModifyTime": 1574843554,
         *                      "logSample": "2019-11-27 10:48:23,160,,,MAIN,,,INFO,,,98DCC51D-BE5D-49C7-B3FD-37B2BAEFB296,,,123456789,,,cn-hangzhou,,,this is a simple test.",
         *                      "outputDetail": {
         *                      "endpoint": "cn-hangzhou-intranet.log.aliyuncs.com",
         *                      "logstoreName": "test-logstore",
         *                      "region": "cn-hangzhou"
         *                      },
         *                      "outputType": "LogService"
         *                      }
         * @return {@code this}
         */
        public Builder rawConfigData(com.aliyun.ros.cdk.core.IResolvable rawConfigData) {
            this.rawConfigData = rawConfigData;
            return this;
        }

        /**
         * Sets the value of {@link LogtailConfigProps#getRawConfigData}
         * @param rawConfigData Property rawConfigData: The format is the same as the response of SLS API GetConfig.
         *                      Either CloneFrom or RawConfigData must be specified. If CloneFrom and RawConfigData are both specified, logtail config data will be merged from both with RawConfigData first.
         *                      configName, outputType, outputDetail in data will be ignored.For example:
         *                      {
         *                      "configName": "test-logtail-config",
         *                      "createTime": 1574843554,
         *                      "inputDetail": {
         *                      "acceptNoEnoughKeys": false,
         *                      "adjustTimezone": false,
         *                      "advanced": {
         *                      "force_multiconfig": false
         *                      },
         *                      "autoExtend": true,
         *                      "delayAlarmBytes": 0,
         *                      "delaySkipBytes": 0,
         *                      "discardNonUtf8": false,
         *                      "discardUnmatch": false,
         *                      "dockerExcludeEnv": {},
         *                      "dockerExcludeLabel": {},
         *                      "dockerFile": false,
         *                      "dockerIncludeEnv": {},
         *                      "dockerIncludeLabel": {},
         *                      "enableRawLog": false,
         *                      "enableTag": false,
         *                      "fileEncoding": "utf8",
         *                      "filePattern": "test.log*",
         *                      "filterKey": [],
         *                      "filterRegex": [],
         *                      "key": [
         *                      "time",
         *                      "logger",
         *                      "level",
         *                      "request_id",
         *                      "user_id",
         *                      "region_id",
         *                      "content"
         *                      ],
         *                      "localStorage": true,
         *                      "logPath": "/var/log/test",
         *                      "logTimezone": "",
         *                      "logType": "delimiter_log",
         *                      "maxDepth": 100,
         *                      "maxSendRate": -1,
         *                      "mergeType": "topic",
         *                      "preserve": true,
         *                      "preserveDepth": 1,
         *                      "priority": 0,
         *                      "quote": "\u0001",
         *                      "sendRateExpire": 0,
         *                      "sensitive_keys": [],
         *                      "separator": ",,,",
         *                      "shardHashKey": [],
         *                      "tailExisted": false,
         *                      "timeFormat": "",
         *                      "timeKey": "",
         *                      "topicFormat": "none"
         *                      },
         *                      "inputType": "file",
         *                      "lastModifyTime": 1574843554,
         *                      "logSample": "2019-11-27 10:48:23,160,,,MAIN,,,INFO,,,98DCC51D-BE5D-49C7-B3FD-37B2BAEFB296,,,123456789,,,cn-hangzhou,,,this is a simple test.",
         *                      "outputDetail": {
         *                      "endpoint": "cn-hangzhou-intranet.log.aliyuncs.com",
         *                      "logstoreName": "test-logstore",
         *                      "region": "cn-hangzhou"
         *                      },
         *                      "outputType": "LogService"
         *                      }
         * @return {@code this}
         */
        public Builder rawConfigData(java.util.Map<java.lang.String, ? extends java.lang.Object> rawConfigData) {
            this.rawConfigData = rawConfigData;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link LogtailConfigProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public LogtailConfigProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link LogtailConfigProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements LogtailConfigProps {
        private final java.lang.Object logstoreName;
        private final java.lang.Object logtailConfigName;
        private final java.lang.Object projectName;
        private final java.lang.Object cloneFrom;
        private final java.lang.Object rawConfigData;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.logstoreName = software.amazon.jsii.Kernel.get(this, "logstoreName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.logtailConfigName = software.amazon.jsii.Kernel.get(this, "logtailConfigName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.projectName = software.amazon.jsii.Kernel.get(this, "projectName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.cloneFrom = software.amazon.jsii.Kernel.get(this, "cloneFrom", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.rawConfigData = software.amazon.jsii.Kernel.get(this, "rawConfigData", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.logstoreName = java.util.Objects.requireNonNull(builder.logstoreName, "logstoreName is required");
            this.logtailConfigName = java.util.Objects.requireNonNull(builder.logtailConfigName, "logtailConfigName is required");
            this.projectName = java.util.Objects.requireNonNull(builder.projectName, "projectName is required");
            this.cloneFrom = builder.cloneFrom;
            this.rawConfigData = builder.rawConfigData;
        }

        @Override
        public final java.lang.Object getLogstoreName() {
            return this.logstoreName;
        }

        @Override
        public final java.lang.Object getLogtailConfigName() {
            return this.logtailConfigName;
        }

        @Override
        public final java.lang.Object getProjectName() {
            return this.projectName;
        }

        @Override
        public final java.lang.Object getCloneFrom() {
            return this.cloneFrom;
        }

        @Override
        public final java.lang.Object getRawConfigData() {
            return this.rawConfigData;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("logstoreName", om.valueToTree(this.getLogstoreName()));
            data.set("logtailConfigName", om.valueToTree(this.getLogtailConfigName()));
            data.set("projectName", om.valueToTree(this.getProjectName()));
            if (this.getCloneFrom() != null) {
                data.set("cloneFrom", om.valueToTree(this.getCloneFrom()));
            }
            if (this.getRawConfigData() != null) {
                data.set("rawConfigData", om.valueToTree(this.getRawConfigData()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sls.LogtailConfigProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            LogtailConfigProps.Jsii$Proxy that = (LogtailConfigProps.Jsii$Proxy) o;

            if (!logstoreName.equals(that.logstoreName)) return false;
            if (!logtailConfigName.equals(that.logtailConfigName)) return false;
            if (!projectName.equals(that.projectName)) return false;
            if (this.cloneFrom != null ? !this.cloneFrom.equals(that.cloneFrom) : that.cloneFrom != null) return false;
            return this.rawConfigData != null ? this.rawConfigData.equals(that.rawConfigData) : that.rawConfigData == null;
        }

        @Override
        public final int hashCode() {
            int result = this.logstoreName.hashCode();
            result = 31 * result + (this.logtailConfigName.hashCode());
            result = 31 * result + (this.projectName.hashCode());
            result = 31 * result + (this.cloneFrom != null ? this.cloneFrom.hashCode() : 0);
            result = 31 * result + (this.rawConfigData != null ? this.rawConfigData.hashCode() : 0);
            return result;
        }
    }
}
