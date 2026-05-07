package com.aliyun.ros.cdk.nlb;

/**
 * Properties for defining a <code>RosHdMonitorRegionConfig</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlb-hdmonitorregionconfig
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:52.061Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.nlb.$Module.class, fqn = "@alicloud/ros-cdk-nlb.RosHdMonitorRegionConfigProps")
@software.amazon.jsii.Jsii.Proxy(RosHdMonitorRegionConfigProps.Jsii$Proxy.class)
public interface RosHdMonitorRegionConfigProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getLogProject();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getMetricStore();

    /**
     * @return a {@link Builder} of {@link RosHdMonitorRegionConfigProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosHdMonitorRegionConfigProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosHdMonitorRegionConfigProps> {
        java.lang.Object logProject;
        java.lang.Object metricStore;

        /**
         * Sets the value of {@link RosHdMonitorRegionConfigProps#getLogProject}
         * @param logProject the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder logProject(java.lang.String logProject) {
            this.logProject = logProject;
            return this;
        }

        /**
         * Sets the value of {@link RosHdMonitorRegionConfigProps#getLogProject}
         * @param logProject the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder logProject(com.aliyun.ros.cdk.core.IResolvable logProject) {
            this.logProject = logProject;
            return this;
        }

        /**
         * Sets the value of {@link RosHdMonitorRegionConfigProps#getMetricStore}
         * @param metricStore the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder metricStore(java.lang.String metricStore) {
            this.metricStore = metricStore;
            return this;
        }

        /**
         * Sets the value of {@link RosHdMonitorRegionConfigProps#getMetricStore}
         * @param metricStore the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder metricStore(com.aliyun.ros.cdk.core.IResolvable metricStore) {
            this.metricStore = metricStore;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosHdMonitorRegionConfigProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosHdMonitorRegionConfigProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosHdMonitorRegionConfigProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosHdMonitorRegionConfigProps {
        private final java.lang.Object logProject;
        private final java.lang.Object metricStore;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.logProject = software.amazon.jsii.Kernel.get(this, "logProject", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.metricStore = software.amazon.jsii.Kernel.get(this, "metricStore", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.logProject = java.util.Objects.requireNonNull(builder.logProject, "logProject is required");
            this.metricStore = java.util.Objects.requireNonNull(builder.metricStore, "metricStore is required");
        }

        @Override
        public final java.lang.Object getLogProject() {
            return this.logProject;
        }

        @Override
        public final java.lang.Object getMetricStore() {
            return this.metricStore;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("logProject", om.valueToTree(this.getLogProject()));
            data.set("metricStore", om.valueToTree(this.getMetricStore()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-nlb.RosHdMonitorRegionConfigProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosHdMonitorRegionConfigProps.Jsii$Proxy that = (RosHdMonitorRegionConfigProps.Jsii$Proxy) o;

            if (!logProject.equals(that.logProject)) return false;
            return this.metricStore.equals(that.metricStore);
        }

        @Override
        public final int hashCode() {
            int result = this.logProject.hashCode();
            result = 31 * result + (this.metricStore.hashCode());
            return result;
        }
    }
}
