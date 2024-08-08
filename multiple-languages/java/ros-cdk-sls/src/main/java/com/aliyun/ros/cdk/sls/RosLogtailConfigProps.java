package com.aliyun.ros.cdk.sls;

/**
 * Properties for defining a <code>RosLogtailConfig</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-logtailconfig
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-08T09:17:14.368Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sls.$Module.class, fqn = "@alicloud/ros-cdk-sls.RosLogtailConfigProps")
@software.amazon.jsii.Jsii.Proxy(RosLogtailConfigProps.Jsii$Proxy.class)
public interface RosLogtailConfigProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getLogstoreName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getLogtailConfigName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getProjectName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCloneFrom() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRawConfigData() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosLogtailConfigProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosLogtailConfigProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosLogtailConfigProps> {
        java.lang.Object logstoreName;
        java.lang.Object logtailConfigName;
        java.lang.Object projectName;
        java.lang.Object cloneFrom;
        java.lang.Object rawConfigData;

        /**
         * Sets the value of {@link RosLogtailConfigProps#getLogstoreName}
         * @param logstoreName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder logstoreName(java.lang.String logstoreName) {
            this.logstoreName = logstoreName;
            return this;
        }

        /**
         * Sets the value of {@link RosLogtailConfigProps#getLogstoreName}
         * @param logstoreName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder logstoreName(com.aliyun.ros.cdk.core.IResolvable logstoreName) {
            this.logstoreName = logstoreName;
            return this;
        }

        /**
         * Sets the value of {@link RosLogtailConfigProps#getLogtailConfigName}
         * @param logtailConfigName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder logtailConfigName(java.lang.String logtailConfigName) {
            this.logtailConfigName = logtailConfigName;
            return this;
        }

        /**
         * Sets the value of {@link RosLogtailConfigProps#getLogtailConfigName}
         * @param logtailConfigName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder logtailConfigName(com.aliyun.ros.cdk.core.IResolvable logtailConfigName) {
            this.logtailConfigName = logtailConfigName;
            return this;
        }

        /**
         * Sets the value of {@link RosLogtailConfigProps#getProjectName}
         * @param projectName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder projectName(java.lang.String projectName) {
            this.projectName = projectName;
            return this;
        }

        /**
         * Sets the value of {@link RosLogtailConfigProps#getProjectName}
         * @param projectName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder projectName(com.aliyun.ros.cdk.core.IResolvable projectName) {
            this.projectName = projectName;
            return this;
        }

        /**
         * Sets the value of {@link RosLogtailConfigProps#getCloneFrom}
         * @param cloneFrom the value to be set.
         * @return {@code this}
         */
        public Builder cloneFrom(com.aliyun.ros.cdk.core.IResolvable cloneFrom) {
            this.cloneFrom = cloneFrom;
            return this;
        }

        /**
         * Sets the value of {@link RosLogtailConfigProps#getCloneFrom}
         * @param cloneFrom the value to be set.
         * @return {@code this}
         */
        public Builder cloneFrom(com.aliyun.ros.cdk.sls.RosLogtailConfig.CloneFromProperty cloneFrom) {
            this.cloneFrom = cloneFrom;
            return this;
        }

        /**
         * Sets the value of {@link RosLogtailConfigProps#getRawConfigData}
         * @param rawConfigData the value to be set.
         * @return {@code this}
         */
        public Builder rawConfigData(com.aliyun.ros.cdk.core.IResolvable rawConfigData) {
            this.rawConfigData = rawConfigData;
            return this;
        }

        /**
         * Sets the value of {@link RosLogtailConfigProps#getRawConfigData}
         * @param rawConfigData the value to be set.
         * @return {@code this}
         */
        public Builder rawConfigData(java.util.Map<java.lang.String, ? extends java.lang.Object> rawConfigData) {
            this.rawConfigData = rawConfigData;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosLogtailConfigProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosLogtailConfigProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosLogtailConfigProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosLogtailConfigProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sls.RosLogtailConfigProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosLogtailConfigProps.Jsii$Proxy that = (RosLogtailConfigProps.Jsii$Proxy) o;

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
