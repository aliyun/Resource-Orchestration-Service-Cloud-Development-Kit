package com.aliyun.ros.cdk.edas;

/**
 * Properties for defining a <code>RosK8sSlbBinding</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-k8sslbbinding
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-22T08:56:20.821Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.edas.$Module.class, fqn = "@alicloud/ros-cdk-edas.RosK8sSlbBindingProps")
@software.amazon.jsii.Jsii.Proxy(RosK8sSlbBindingProps.Jsii$Proxy.class)
public interface RosK8sSlbBindingProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAppId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getClusterId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getServicePortInfos();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getType();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLoadBalancerId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getScheduler() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSpecification() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosK8sSlbBindingProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosK8sSlbBindingProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosK8sSlbBindingProps> {
        java.lang.Object appId;
        java.lang.Object clusterId;
        java.lang.Object servicePortInfos;
        java.lang.Object type;
        java.lang.Object loadBalancerId;
        java.lang.Object scheduler;
        java.lang.Object specification;

        /**
         * Sets the value of {@link RosK8sSlbBindingProps#getAppId}
         * @param appId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder appId(java.lang.String appId) {
            this.appId = appId;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sSlbBindingProps#getAppId}
         * @param appId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder appId(com.aliyun.ros.cdk.core.IResolvable appId) {
            this.appId = appId;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sSlbBindingProps#getClusterId}
         * @param clusterId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterId(java.lang.String clusterId) {
            this.clusterId = clusterId;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sSlbBindingProps#getClusterId}
         * @param clusterId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterId(com.aliyun.ros.cdk.core.IResolvable clusterId) {
            this.clusterId = clusterId;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sSlbBindingProps#getServicePortInfos}
         * @param servicePortInfos the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder servicePortInfos(com.aliyun.ros.cdk.core.IResolvable servicePortInfos) {
            this.servicePortInfos = servicePortInfos;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sSlbBindingProps#getServicePortInfos}
         * @param servicePortInfos the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder servicePortInfos(java.util.List<? extends java.lang.Object> servicePortInfos) {
            this.servicePortInfos = servicePortInfos;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sSlbBindingProps#getType}
         * @param type the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder type(java.lang.String type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sSlbBindingProps#getType}
         * @param type the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sSlbBindingProps#getLoadBalancerId}
         * @param loadBalancerId the value to be set.
         * @return {@code this}
         */
        public Builder loadBalancerId(java.lang.String loadBalancerId) {
            this.loadBalancerId = loadBalancerId;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sSlbBindingProps#getLoadBalancerId}
         * @param loadBalancerId the value to be set.
         * @return {@code this}
         */
        public Builder loadBalancerId(com.aliyun.ros.cdk.core.IResolvable loadBalancerId) {
            this.loadBalancerId = loadBalancerId;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sSlbBindingProps#getScheduler}
         * @param scheduler the value to be set.
         * @return {@code this}
         */
        public Builder scheduler(java.lang.String scheduler) {
            this.scheduler = scheduler;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sSlbBindingProps#getScheduler}
         * @param scheduler the value to be set.
         * @return {@code this}
         */
        public Builder scheduler(com.aliyun.ros.cdk.core.IResolvable scheduler) {
            this.scheduler = scheduler;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sSlbBindingProps#getSpecification}
         * @param specification the value to be set.
         * @return {@code this}
         */
        public Builder specification(java.lang.String specification) {
            this.specification = specification;
            return this;
        }

        /**
         * Sets the value of {@link RosK8sSlbBindingProps#getSpecification}
         * @param specification the value to be set.
         * @return {@code this}
         */
        public Builder specification(com.aliyun.ros.cdk.core.IResolvable specification) {
            this.specification = specification;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosK8sSlbBindingProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosK8sSlbBindingProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosK8sSlbBindingProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosK8sSlbBindingProps {
        private final java.lang.Object appId;
        private final java.lang.Object clusterId;
        private final java.lang.Object servicePortInfos;
        private final java.lang.Object type;
        private final java.lang.Object loadBalancerId;
        private final java.lang.Object scheduler;
        private final java.lang.Object specification;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.appId = software.amazon.jsii.Kernel.get(this, "appId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.clusterId = software.amazon.jsii.Kernel.get(this, "clusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.servicePortInfos = software.amazon.jsii.Kernel.get(this, "servicePortInfos", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.loadBalancerId = software.amazon.jsii.Kernel.get(this, "loadBalancerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.scheduler = software.amazon.jsii.Kernel.get(this, "scheduler", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.specification = software.amazon.jsii.Kernel.get(this, "specification", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.appId = java.util.Objects.requireNonNull(builder.appId, "appId is required");
            this.clusterId = java.util.Objects.requireNonNull(builder.clusterId, "clusterId is required");
            this.servicePortInfos = java.util.Objects.requireNonNull(builder.servicePortInfos, "servicePortInfos is required");
            this.type = java.util.Objects.requireNonNull(builder.type, "type is required");
            this.loadBalancerId = builder.loadBalancerId;
            this.scheduler = builder.scheduler;
            this.specification = builder.specification;
        }

        @Override
        public final java.lang.Object getAppId() {
            return this.appId;
        }

        @Override
        public final java.lang.Object getClusterId() {
            return this.clusterId;
        }

        @Override
        public final java.lang.Object getServicePortInfos() {
            return this.servicePortInfos;
        }

        @Override
        public final java.lang.Object getType() {
            return this.type;
        }

        @Override
        public final java.lang.Object getLoadBalancerId() {
            return this.loadBalancerId;
        }

        @Override
        public final java.lang.Object getScheduler() {
            return this.scheduler;
        }

        @Override
        public final java.lang.Object getSpecification() {
            return this.specification;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("appId", om.valueToTree(this.getAppId()));
            data.set("clusterId", om.valueToTree(this.getClusterId()));
            data.set("servicePortInfos", om.valueToTree(this.getServicePortInfos()));
            data.set("type", om.valueToTree(this.getType()));
            if (this.getLoadBalancerId() != null) {
                data.set("loadBalancerId", om.valueToTree(this.getLoadBalancerId()));
            }
            if (this.getScheduler() != null) {
                data.set("scheduler", om.valueToTree(this.getScheduler()));
            }
            if (this.getSpecification() != null) {
                data.set("specification", om.valueToTree(this.getSpecification()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-edas.RosK8sSlbBindingProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosK8sSlbBindingProps.Jsii$Proxy that = (RosK8sSlbBindingProps.Jsii$Proxy) o;

            if (!appId.equals(that.appId)) return false;
            if (!clusterId.equals(that.clusterId)) return false;
            if (!servicePortInfos.equals(that.servicePortInfos)) return false;
            if (!type.equals(that.type)) return false;
            if (this.loadBalancerId != null ? !this.loadBalancerId.equals(that.loadBalancerId) : that.loadBalancerId != null) return false;
            if (this.scheduler != null ? !this.scheduler.equals(that.scheduler) : that.scheduler != null) return false;
            return this.specification != null ? this.specification.equals(that.specification) : that.specification == null;
        }

        @Override
        public final int hashCode() {
            int result = this.appId.hashCode();
            result = 31 * result + (this.clusterId.hashCode());
            result = 31 * result + (this.servicePortInfos.hashCode());
            result = 31 * result + (this.type.hashCode());
            result = 31 * result + (this.loadBalancerId != null ? this.loadBalancerId.hashCode() : 0);
            result = 31 * result + (this.scheduler != null ? this.scheduler.hashCode() : 0);
            result = 31 * result + (this.specification != null ? this.specification.hashCode() : 0);
            return result;
        }
    }
}
