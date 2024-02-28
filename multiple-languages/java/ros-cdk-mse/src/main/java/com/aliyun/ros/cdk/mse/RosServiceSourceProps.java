package com.aliyun.ros.cdk.mse;

/**
 * Properties for defining a <code>RosServiceSource</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-servicesource
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-02-28T02:53:29.683Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mse.$Module.class, fqn = "@alicloud/ros-cdk-mse.RosServiceSourceProps")
@software.amazon.jsii.Jsii.Proxy(RosServiceSourceProps.Jsii$Proxy.class)
public interface RosServiceSourceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getGatewayUniqueId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSource();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAddress() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getGroupList() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIngressOptions() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPathList() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosServiceSourceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosServiceSourceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosServiceSourceProps> {
        java.lang.Object gatewayUniqueId;
        java.lang.Object name;
        java.lang.Object source;
        java.lang.Object address;
        java.lang.Object groupList;
        java.lang.Object ingressOptions;
        java.lang.Object pathList;

        /**
         * Sets the value of {@link RosServiceSourceProps#getGatewayUniqueId}
         * @param gatewayUniqueId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder gatewayUniqueId(java.lang.String gatewayUniqueId) {
            this.gatewayUniqueId = gatewayUniqueId;
            return this;
        }

        /**
         * Sets the value of {@link RosServiceSourceProps#getGatewayUniqueId}
         * @param gatewayUniqueId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder gatewayUniqueId(com.aliyun.ros.cdk.core.IResolvable gatewayUniqueId) {
            this.gatewayUniqueId = gatewayUniqueId;
            return this;
        }

        /**
         * Sets the value of {@link RosServiceSourceProps#getName}
         * @param name the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosServiceSourceProps#getName}
         * @param name the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosServiceSourceProps#getSource}
         * @param source the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder source(java.lang.String source) {
            this.source = source;
            return this;
        }

        /**
         * Sets the value of {@link RosServiceSourceProps#getSource}
         * @param source the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder source(com.aliyun.ros.cdk.core.IResolvable source) {
            this.source = source;
            return this;
        }

        /**
         * Sets the value of {@link RosServiceSourceProps#getAddress}
         * @param address the value to be set.
         * @return {@code this}
         */
        public Builder address(java.lang.String address) {
            this.address = address;
            return this;
        }

        /**
         * Sets the value of {@link RosServiceSourceProps#getAddress}
         * @param address the value to be set.
         * @return {@code this}
         */
        public Builder address(com.aliyun.ros.cdk.core.IResolvable address) {
            this.address = address;
            return this;
        }

        /**
         * Sets the value of {@link RosServiceSourceProps#getGroupList}
         * @param groupList the value to be set.
         * @return {@code this}
         */
        public Builder groupList(java.util.List<? extends java.lang.Object> groupList) {
            this.groupList = groupList;
            return this;
        }

        /**
         * Sets the value of {@link RosServiceSourceProps#getGroupList}
         * @param groupList the value to be set.
         * @return {@code this}
         */
        public Builder groupList(com.aliyun.ros.cdk.core.IResolvable groupList) {
            this.groupList = groupList;
            return this;
        }

        /**
         * Sets the value of {@link RosServiceSourceProps#getIngressOptions}
         * @param ingressOptions the value to be set.
         * @return {@code this}
         */
        public Builder ingressOptions(com.aliyun.ros.cdk.core.IResolvable ingressOptions) {
            this.ingressOptions = ingressOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosServiceSourceProps#getIngressOptions}
         * @param ingressOptions the value to be set.
         * @return {@code this}
         */
        public Builder ingressOptions(com.aliyun.ros.cdk.mse.RosServiceSource.IngressOptionsProperty ingressOptions) {
            this.ingressOptions = ingressOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosServiceSourceProps#getPathList}
         * @param pathList the value to be set.
         * @return {@code this}
         */
        public Builder pathList(java.util.List<? extends java.lang.Object> pathList) {
            this.pathList = pathList;
            return this;
        }

        /**
         * Sets the value of {@link RosServiceSourceProps#getPathList}
         * @param pathList the value to be set.
         * @return {@code this}
         */
        public Builder pathList(com.aliyun.ros.cdk.core.IResolvable pathList) {
            this.pathList = pathList;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosServiceSourceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosServiceSourceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosServiceSourceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosServiceSourceProps {
        private final java.lang.Object gatewayUniqueId;
        private final java.lang.Object name;
        private final java.lang.Object source;
        private final java.lang.Object address;
        private final java.lang.Object groupList;
        private final java.lang.Object ingressOptions;
        private final java.lang.Object pathList;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.gatewayUniqueId = software.amazon.jsii.Kernel.get(this, "gatewayUniqueId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.source = software.amazon.jsii.Kernel.get(this, "source", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.address = software.amazon.jsii.Kernel.get(this, "address", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.groupList = software.amazon.jsii.Kernel.get(this, "groupList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ingressOptions = software.amazon.jsii.Kernel.get(this, "ingressOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.pathList = software.amazon.jsii.Kernel.get(this, "pathList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.gatewayUniqueId = java.util.Objects.requireNonNull(builder.gatewayUniqueId, "gatewayUniqueId is required");
            this.name = java.util.Objects.requireNonNull(builder.name, "name is required");
            this.source = java.util.Objects.requireNonNull(builder.source, "source is required");
            this.address = builder.address;
            this.groupList = builder.groupList;
            this.ingressOptions = builder.ingressOptions;
            this.pathList = builder.pathList;
        }

        @Override
        public final java.lang.Object getGatewayUniqueId() {
            return this.gatewayUniqueId;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getSource() {
            return this.source;
        }

        @Override
        public final java.lang.Object getAddress() {
            return this.address;
        }

        @Override
        public final java.lang.Object getGroupList() {
            return this.groupList;
        }

        @Override
        public final java.lang.Object getIngressOptions() {
            return this.ingressOptions;
        }

        @Override
        public final java.lang.Object getPathList() {
            return this.pathList;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("gatewayUniqueId", om.valueToTree(this.getGatewayUniqueId()));
            data.set("name", om.valueToTree(this.getName()));
            data.set("source", om.valueToTree(this.getSource()));
            if (this.getAddress() != null) {
                data.set("address", om.valueToTree(this.getAddress()));
            }
            if (this.getGroupList() != null) {
                data.set("groupList", om.valueToTree(this.getGroupList()));
            }
            if (this.getIngressOptions() != null) {
                data.set("ingressOptions", om.valueToTree(this.getIngressOptions()));
            }
            if (this.getPathList() != null) {
                data.set("pathList", om.valueToTree(this.getPathList()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-mse.RosServiceSourceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosServiceSourceProps.Jsii$Proxy that = (RosServiceSourceProps.Jsii$Proxy) o;

            if (!gatewayUniqueId.equals(that.gatewayUniqueId)) return false;
            if (!name.equals(that.name)) return false;
            if (!source.equals(that.source)) return false;
            if (this.address != null ? !this.address.equals(that.address) : that.address != null) return false;
            if (this.groupList != null ? !this.groupList.equals(that.groupList) : that.groupList != null) return false;
            if (this.ingressOptions != null ? !this.ingressOptions.equals(that.ingressOptions) : that.ingressOptions != null) return false;
            return this.pathList != null ? this.pathList.equals(that.pathList) : that.pathList == null;
        }

        @Override
        public final int hashCode() {
            int result = this.gatewayUniqueId.hashCode();
            result = 31 * result + (this.name.hashCode());
            result = 31 * result + (this.source.hashCode());
            result = 31 * result + (this.address != null ? this.address.hashCode() : 0);
            result = 31 * result + (this.groupList != null ? this.groupList.hashCode() : 0);
            result = 31 * result + (this.ingressOptions != null ? this.ingressOptions.hashCode() : 0);
            result = 31 * result + (this.pathList != null ? this.pathList.hashCode() : 0);
            return result;
        }
    }
}
