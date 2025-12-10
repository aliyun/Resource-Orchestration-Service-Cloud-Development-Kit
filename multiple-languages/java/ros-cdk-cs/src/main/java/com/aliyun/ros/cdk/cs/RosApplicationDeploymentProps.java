package com.aliyun.ros.cdk.cs;

/**
 * Properties for defining a <code>RosApplicationDeployment</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-applicationdeployment
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:54.111Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cs.$Module.class, fqn = "@alicloud/ros-cdk-cs.RosApplicationDeploymentProps")
@software.amazon.jsii.Jsii.Proxy(RosApplicationDeploymentProps.Jsii$Proxy.class)
public interface RosApplicationDeploymentProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getChartUrl();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getClusterId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNamespace();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getType();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getValues() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosApplicationDeploymentProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosApplicationDeploymentProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosApplicationDeploymentProps> {
        java.lang.Object chartUrl;
        java.lang.Object clusterId;
        java.lang.Object name;
        java.lang.Object namespace;
        java.lang.Object type;
        java.lang.Object values;

        /**
         * Sets the value of {@link RosApplicationDeploymentProps#getChartUrl}
         * @param chartUrl the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder chartUrl(java.lang.String chartUrl) {
            this.chartUrl = chartUrl;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationDeploymentProps#getChartUrl}
         * @param chartUrl the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder chartUrl(com.aliyun.ros.cdk.core.IResolvable chartUrl) {
            this.chartUrl = chartUrl;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationDeploymentProps#getClusterId}
         * @param clusterId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterId(java.lang.String clusterId) {
            this.clusterId = clusterId;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationDeploymentProps#getClusterId}
         * @param clusterId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterId(com.aliyun.ros.cdk.core.IResolvable clusterId) {
            this.clusterId = clusterId;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationDeploymentProps#getName}
         * @param name the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationDeploymentProps#getName}
         * @param name the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationDeploymentProps#getNamespace}
         * @param namespace the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder namespace(java.lang.String namespace) {
            this.namespace = namespace;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationDeploymentProps#getNamespace}
         * @param namespace the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder namespace(com.aliyun.ros.cdk.core.IResolvable namespace) {
            this.namespace = namespace;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationDeploymentProps#getType}
         * @param type the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder type(java.lang.String type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationDeploymentProps#getType}
         * @param type the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationDeploymentProps#getValues}
         * @param values the value to be set.
         * @return {@code this}
         */
        public Builder values(com.aliyun.ros.cdk.core.IResolvable values) {
            this.values = values;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationDeploymentProps#getValues}
         * @param values the value to be set.
         * @return {@code this}
         */
        public Builder values(java.util.Map<java.lang.String, ? extends java.lang.Object> values) {
            this.values = values;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosApplicationDeploymentProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosApplicationDeploymentProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosApplicationDeploymentProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosApplicationDeploymentProps {
        private final java.lang.Object chartUrl;
        private final java.lang.Object clusterId;
        private final java.lang.Object name;
        private final java.lang.Object namespace;
        private final java.lang.Object type;
        private final java.lang.Object values;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.chartUrl = software.amazon.jsii.Kernel.get(this, "chartUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.clusterId = software.amazon.jsii.Kernel.get(this, "clusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.namespace = software.amazon.jsii.Kernel.get(this, "namespace", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.values = software.amazon.jsii.Kernel.get(this, "values", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.chartUrl = java.util.Objects.requireNonNull(builder.chartUrl, "chartUrl is required");
            this.clusterId = java.util.Objects.requireNonNull(builder.clusterId, "clusterId is required");
            this.name = java.util.Objects.requireNonNull(builder.name, "name is required");
            this.namespace = java.util.Objects.requireNonNull(builder.namespace, "namespace is required");
            this.type = java.util.Objects.requireNonNull(builder.type, "type is required");
            this.values = builder.values;
        }

        @Override
        public final java.lang.Object getChartUrl() {
            return this.chartUrl;
        }

        @Override
        public final java.lang.Object getClusterId() {
            return this.clusterId;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getNamespace() {
            return this.namespace;
        }

        @Override
        public final java.lang.Object getType() {
            return this.type;
        }

        @Override
        public final java.lang.Object getValues() {
            return this.values;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("chartUrl", om.valueToTree(this.getChartUrl()));
            data.set("clusterId", om.valueToTree(this.getClusterId()));
            data.set("name", om.valueToTree(this.getName()));
            data.set("namespace", om.valueToTree(this.getNamespace()));
            data.set("type", om.valueToTree(this.getType()));
            if (this.getValues() != null) {
                data.set("values", om.valueToTree(this.getValues()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cs.RosApplicationDeploymentProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosApplicationDeploymentProps.Jsii$Proxy that = (RosApplicationDeploymentProps.Jsii$Proxy) o;

            if (!chartUrl.equals(that.chartUrl)) return false;
            if (!clusterId.equals(that.clusterId)) return false;
            if (!name.equals(that.name)) return false;
            if (!namespace.equals(that.namespace)) return false;
            if (!type.equals(that.type)) return false;
            return this.values != null ? this.values.equals(that.values) : that.values == null;
        }

        @Override
        public final int hashCode() {
            int result = this.chartUrl.hashCode();
            result = 31 * result + (this.clusterId.hashCode());
            result = 31 * result + (this.name.hashCode());
            result = 31 * result + (this.namespace.hashCode());
            result = 31 * result + (this.type.hashCode());
            result = 31 * result + (this.values != null ? this.values.hashCode() : 0);
            return result;
        }
    }
}
