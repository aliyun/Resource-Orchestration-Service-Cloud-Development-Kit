package com.aliyun.ros.cdk.nlb;

/**
 * Properties for defining a <code>HdMonitorRegionConfig</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlb-hdmonitorregionconfig
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:52.027Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.nlb.$Module.class, fqn = "@alicloud/ros-cdk-nlb.HdMonitorRegionConfigProps")
@software.amazon.jsii.Jsii.Proxy(HdMonitorRegionConfigProps.Jsii$Proxy.class)
public interface HdMonitorRegionConfigProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property logProject: The name of the LogProject.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getLogProject();

    /**
     * Property metricStore: The name of the MetricStore.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getMetricStore();

    /**
     * @return a {@link Builder} of {@link HdMonitorRegionConfigProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link HdMonitorRegionConfigProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<HdMonitorRegionConfigProps> {
        java.lang.Object logProject;
        java.lang.Object metricStore;

        /**
         * Sets the value of {@link HdMonitorRegionConfigProps#getLogProject}
         * @param logProject Property logProject: The name of the LogProject. This parameter is required.
         * @return {@code this}
         */
        public Builder logProject(java.lang.String logProject) {
            this.logProject = logProject;
            return this;
        }

        /**
         * Sets the value of {@link HdMonitorRegionConfigProps#getLogProject}
         * @param logProject Property logProject: The name of the LogProject. This parameter is required.
         * @return {@code this}
         */
        public Builder logProject(com.aliyun.ros.cdk.core.IResolvable logProject) {
            this.logProject = logProject;
            return this;
        }

        /**
         * Sets the value of {@link HdMonitorRegionConfigProps#getMetricStore}
         * @param metricStore Property metricStore: The name of the MetricStore. This parameter is required.
         * @return {@code this}
         */
        public Builder metricStore(java.lang.String metricStore) {
            this.metricStore = metricStore;
            return this;
        }

        /**
         * Sets the value of {@link HdMonitorRegionConfigProps#getMetricStore}
         * @param metricStore Property metricStore: The name of the MetricStore. This parameter is required.
         * @return {@code this}
         */
        public Builder metricStore(com.aliyun.ros.cdk.core.IResolvable metricStore) {
            this.metricStore = metricStore;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link HdMonitorRegionConfigProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public HdMonitorRegionConfigProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link HdMonitorRegionConfigProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements HdMonitorRegionConfigProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-nlb.HdMonitorRegionConfigProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            HdMonitorRegionConfigProps.Jsii$Proxy that = (HdMonitorRegionConfigProps.Jsii$Proxy) o;

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
