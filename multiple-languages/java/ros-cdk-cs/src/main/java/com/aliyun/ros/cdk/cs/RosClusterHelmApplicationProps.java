package com.aliyun.ros.cdk.cs;

/**
 * Properties for defining a <code>ALIYUN::CS::ClusterHelmApplication</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.84.0 (build 5404dcf)", date = "2023-06-28T08:22:27.590Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cs.$Module.class, fqn = "@alicloud/ros-cdk-cs.RosClusterHelmApplicationProps")
@software.amazon.jsii.Jsii.Proxy(RosClusterHelmApplicationProps.Jsii$Proxy.class)
public interface RosClusterHelmApplicationProps extends software.amazon.jsii.JsiiSerializable {

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
    default @org.jetbrains.annotations.Nullable java.lang.Object getChartValues() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCredential() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNamespace() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosClusterHelmApplicationProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosClusterHelmApplicationProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosClusterHelmApplicationProps> {
        java.lang.Object chartUrl;
        java.lang.Object clusterId;
        java.lang.Object name;
        java.lang.Object chartValues;
        java.lang.Object credential;
        java.lang.Object namespace;

        /**
         * Sets the value of {@link RosClusterHelmApplicationProps#getChartUrl}
         * @param chartUrl the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder chartUrl(java.lang.String chartUrl) {
            this.chartUrl = chartUrl;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterHelmApplicationProps#getChartUrl}
         * @param chartUrl the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder chartUrl(com.aliyun.ros.cdk.core.IResolvable chartUrl) {
            this.chartUrl = chartUrl;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterHelmApplicationProps#getClusterId}
         * @param clusterId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterId(java.lang.String clusterId) {
            this.clusterId = clusterId;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterHelmApplicationProps#getClusterId}
         * @param clusterId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterId(com.aliyun.ros.cdk.core.IResolvable clusterId) {
            this.clusterId = clusterId;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterHelmApplicationProps#getName}
         * @param name the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterHelmApplicationProps#getName}
         * @param name the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterHelmApplicationProps#getChartValues}
         * @param chartValues the value to be set.
         * @return {@code this}
         */
        public Builder chartValues(com.aliyun.ros.cdk.core.IResolvable chartValues) {
            this.chartValues = chartValues;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterHelmApplicationProps#getChartValues}
         * @param chartValues the value to be set.
         * @return {@code this}
         */
        public Builder chartValues(java.util.Map<java.lang.String, ? extends java.lang.Object> chartValues) {
            this.chartValues = chartValues;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterHelmApplicationProps#getCredential}
         * @param credential the value to be set.
         * @return {@code this}
         */
        public Builder credential(com.aliyun.ros.cdk.core.IResolvable credential) {
            this.credential = credential;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterHelmApplicationProps#getCredential}
         * @param credential the value to be set.
         * @return {@code this}
         */
        public Builder credential(com.aliyun.ros.cdk.cs.RosClusterHelmApplication.CredentialProperty credential) {
            this.credential = credential;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterHelmApplicationProps#getNamespace}
         * @param namespace the value to be set.
         * @return {@code this}
         */
        public Builder namespace(java.lang.String namespace) {
            this.namespace = namespace;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterHelmApplicationProps#getNamespace}
         * @param namespace the value to be set.
         * @return {@code this}
         */
        public Builder namespace(com.aliyun.ros.cdk.core.IResolvable namespace) {
            this.namespace = namespace;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosClusterHelmApplicationProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosClusterHelmApplicationProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosClusterHelmApplicationProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosClusterHelmApplicationProps {
        private final java.lang.Object chartUrl;
        private final java.lang.Object clusterId;
        private final java.lang.Object name;
        private final java.lang.Object chartValues;
        private final java.lang.Object credential;
        private final java.lang.Object namespace;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.chartUrl = software.amazon.jsii.Kernel.get(this, "chartUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.clusterId = software.amazon.jsii.Kernel.get(this, "clusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.chartValues = software.amazon.jsii.Kernel.get(this, "chartValues", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.credential = software.amazon.jsii.Kernel.get(this, "credential", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.namespace = software.amazon.jsii.Kernel.get(this, "namespace", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.chartUrl = java.util.Objects.requireNonNull(builder.chartUrl, "chartUrl is required");
            this.clusterId = java.util.Objects.requireNonNull(builder.clusterId, "clusterId is required");
            this.name = java.util.Objects.requireNonNull(builder.name, "name is required");
            this.chartValues = builder.chartValues;
            this.credential = builder.credential;
            this.namespace = builder.namespace;
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
        public final java.lang.Object getChartValues() {
            return this.chartValues;
        }

        @Override
        public final java.lang.Object getCredential() {
            return this.credential;
        }

        @Override
        public final java.lang.Object getNamespace() {
            return this.namespace;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("chartUrl", om.valueToTree(this.getChartUrl()));
            data.set("clusterId", om.valueToTree(this.getClusterId()));
            data.set("name", om.valueToTree(this.getName()));
            if (this.getChartValues() != null) {
                data.set("chartValues", om.valueToTree(this.getChartValues()));
            }
            if (this.getCredential() != null) {
                data.set("credential", om.valueToTree(this.getCredential()));
            }
            if (this.getNamespace() != null) {
                data.set("namespace", om.valueToTree(this.getNamespace()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cs.RosClusterHelmApplicationProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosClusterHelmApplicationProps.Jsii$Proxy that = (RosClusterHelmApplicationProps.Jsii$Proxy) o;

            if (!chartUrl.equals(that.chartUrl)) return false;
            if (!clusterId.equals(that.clusterId)) return false;
            if (!name.equals(that.name)) return false;
            if (this.chartValues != null ? !this.chartValues.equals(that.chartValues) : that.chartValues != null) return false;
            if (this.credential != null ? !this.credential.equals(that.credential) : that.credential != null) return false;
            return this.namespace != null ? this.namespace.equals(that.namespace) : that.namespace == null;
        }

        @Override
        public final int hashCode() {
            int result = this.chartUrl.hashCode();
            result = 31 * result + (this.clusterId.hashCode());
            result = 31 * result + (this.name.hashCode());
            result = 31 * result + (this.chartValues != null ? this.chartValues.hashCode() : 0);
            result = 31 * result + (this.credential != null ? this.credential.hashCode() : 0);
            result = 31 * result + (this.namespace != null ? this.namespace.hashCode() : 0);
            return result;
        }
    }
}
