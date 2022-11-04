package com.aliyun.ros.cdk.foas;

/**
 * Properties for defining a `ALIYUN::FOAS::Project`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.70.0 (build 03c2f6f)", date = "2022-11-04T06:18:42.820Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.foas.$Module.class, fqn = "@alicloud/ros-cdk-foas.RosProjectProps")
@software.amazon.jsii.Jsii.Proxy(RosProjectProps.Jsii$Proxy.class)
public interface RosProjectProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDeployType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getManagerIds();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getClusterId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOrderId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosProjectProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosProjectProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosProjectProps> {
        java.lang.Object deployType;
        java.lang.Object managerIds;
        java.lang.Object name;
        java.lang.Object clusterId;
        java.lang.Object description;
        java.lang.Object orderId;

        /**
         * Sets the value of {@link RosProjectProps#getDeployType}
         * @param deployType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder deployType(java.lang.String deployType) {
            this.deployType = deployType;
            return this;
        }

        /**
         * Sets the value of {@link RosProjectProps#getDeployType}
         * @param deployType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder deployType(com.aliyun.ros.cdk.core.IResolvable deployType) {
            this.deployType = deployType;
            return this;
        }

        /**
         * Sets the value of {@link RosProjectProps#getManagerIds}
         * @param managerIds the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder managerIds(java.lang.String managerIds) {
            this.managerIds = managerIds;
            return this;
        }

        /**
         * Sets the value of {@link RosProjectProps#getManagerIds}
         * @param managerIds the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder managerIds(com.aliyun.ros.cdk.core.IResolvable managerIds) {
            this.managerIds = managerIds;
            return this;
        }

        /**
         * Sets the value of {@link RosProjectProps#getName}
         * @param name the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosProjectProps#getName}
         * @param name the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosProjectProps#getClusterId}
         * @param clusterId the value to be set.
         * @return {@code this}
         */
        public Builder clusterId(java.lang.String clusterId) {
            this.clusterId = clusterId;
            return this;
        }

        /**
         * Sets the value of {@link RosProjectProps#getClusterId}
         * @param clusterId the value to be set.
         * @return {@code this}
         */
        public Builder clusterId(com.aliyun.ros.cdk.core.IResolvable clusterId) {
            this.clusterId = clusterId;
            return this;
        }

        /**
         * Sets the value of {@link RosProjectProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosProjectProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosProjectProps#getOrderId}
         * @param orderId the value to be set.
         * @return {@code this}
         */
        public Builder orderId(java.lang.String orderId) {
            this.orderId = orderId;
            return this;
        }

        /**
         * Sets the value of {@link RosProjectProps#getOrderId}
         * @param orderId the value to be set.
         * @return {@code this}
         */
        public Builder orderId(com.aliyun.ros.cdk.core.IResolvable orderId) {
            this.orderId = orderId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosProjectProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosProjectProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosProjectProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosProjectProps {
        private final java.lang.Object deployType;
        private final java.lang.Object managerIds;
        private final java.lang.Object name;
        private final java.lang.Object clusterId;
        private final java.lang.Object description;
        private final java.lang.Object orderId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.deployType = software.amazon.jsii.Kernel.get(this, "deployType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.managerIds = software.amazon.jsii.Kernel.get(this, "managerIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.clusterId = software.amazon.jsii.Kernel.get(this, "clusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.orderId = software.amazon.jsii.Kernel.get(this, "orderId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.deployType = java.util.Objects.requireNonNull(builder.deployType, "deployType is required");
            this.managerIds = java.util.Objects.requireNonNull(builder.managerIds, "managerIds is required");
            this.name = java.util.Objects.requireNonNull(builder.name, "name is required");
            this.clusterId = builder.clusterId;
            this.description = builder.description;
            this.orderId = builder.orderId;
        }

        @Override
        public final java.lang.Object getDeployType() {
            return this.deployType;
        }

        @Override
        public final java.lang.Object getManagerIds() {
            return this.managerIds;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getClusterId() {
            return this.clusterId;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getOrderId() {
            return this.orderId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("deployType", om.valueToTree(this.getDeployType()));
            data.set("managerIds", om.valueToTree(this.getManagerIds()));
            data.set("name", om.valueToTree(this.getName()));
            if (this.getClusterId() != null) {
                data.set("clusterId", om.valueToTree(this.getClusterId()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getOrderId() != null) {
                data.set("orderId", om.valueToTree(this.getOrderId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-foas.RosProjectProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosProjectProps.Jsii$Proxy that = (RosProjectProps.Jsii$Proxy) o;

            if (!deployType.equals(that.deployType)) return false;
            if (!managerIds.equals(that.managerIds)) return false;
            if (!name.equals(that.name)) return false;
            if (this.clusterId != null ? !this.clusterId.equals(that.clusterId) : that.clusterId != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            return this.orderId != null ? this.orderId.equals(that.orderId) : that.orderId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.deployType.hashCode();
            result = 31 * result + (this.managerIds.hashCode());
            result = 31 * result + (this.name.hashCode());
            result = 31 * result + (this.clusterId != null ? this.clusterId.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.orderId != null ? this.orderId.hashCode() : 0);
            return result;
        }
    }
}
