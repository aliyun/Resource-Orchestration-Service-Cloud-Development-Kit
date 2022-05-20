package com.aliyun.ros.cdk.gws;

/**
 * Properties for defining a `ALIYUN::GWS::Cluster`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.59.0 (build eb02c92)", date = "2022-05-20T02:42:02.608Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.gws.$Module.class, fqn = "@alicloud/ros-cdk-gws.ClusterProps")
@software.amazon.jsii.Jsii.Proxy(ClusterProps.Jsii$Proxy.class)
public interface ClusterProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property clusterType: Cluster Type: gws.s1.standard.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getClusterType();

    /**
     * Property vpcId: VPC id.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVpcId();

    /**
     * Property name: Cluster name.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getName() {
        return null;
    }

    /**
     * Property policy: Cluster policy.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPolicy() {
        return null;
    }

    /**
     * Property vSwitchId: VSwitch id.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVSwitchId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ClusterProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ClusterProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ClusterProps> {
        java.lang.Object clusterType;
        java.lang.Object vpcId;
        java.lang.Object name;
        java.lang.Object policy;
        java.lang.Object vSwitchId;

        /**
         * Sets the value of {@link ClusterProps#getClusterType}
         * @param clusterType Property clusterType: Cluster Type: gws.s1.standard. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterType(java.lang.String clusterType) {
            this.clusterType = clusterType;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getClusterType}
         * @param clusterType Property clusterType: Cluster Type: gws.s1.standard. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterType(com.aliyun.ros.cdk.core.IResolvable clusterType) {
            this.clusterType = clusterType;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getVpcId}
         * @param vpcId Property vpcId: VPC id. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getVpcId}
         * @param vpcId Property vpcId: VPC id. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getName}
         * @param name Property name: Cluster name.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getName}
         * @param name Property name: Cluster name.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getPolicy}
         * @param policy Property policy: Cluster policy.
         * @return {@code this}
         */
        public Builder policy(com.aliyun.ros.cdk.core.IResolvable policy) {
            this.policy = policy;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getPolicy}
         * @param policy Property policy: Cluster policy.
         * @return {@code this}
         */
        public Builder policy(com.aliyun.ros.cdk.gws.RosCluster.PolicyProperty policy) {
            this.policy = policy;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: VSwitch id.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: VSwitch id.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ClusterProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ClusterProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ClusterProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ClusterProps {
        private final java.lang.Object clusterType;
        private final java.lang.Object vpcId;
        private final java.lang.Object name;
        private final java.lang.Object policy;
        private final java.lang.Object vSwitchId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.clusterType = software.amazon.jsii.Kernel.get(this, "clusterType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.policy = software.amazon.jsii.Kernel.get(this, "policy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.clusterType = java.util.Objects.requireNonNull(builder.clusterType, "clusterType is required");
            this.vpcId = java.util.Objects.requireNonNull(builder.vpcId, "vpcId is required");
            this.name = builder.name;
            this.policy = builder.policy;
            this.vSwitchId = builder.vSwitchId;
        }

        @Override
        public final java.lang.Object getClusterType() {
            return this.clusterType;
        }

        @Override
        public final java.lang.Object getVpcId() {
            return this.vpcId;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getPolicy() {
            return this.policy;
        }

        @Override
        public final java.lang.Object getVSwitchId() {
            return this.vSwitchId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("clusterType", om.valueToTree(this.getClusterType()));
            data.set("vpcId", om.valueToTree(this.getVpcId()));
            if (this.getName() != null) {
                data.set("name", om.valueToTree(this.getName()));
            }
            if (this.getPolicy() != null) {
                data.set("policy", om.valueToTree(this.getPolicy()));
            }
            if (this.getVSwitchId() != null) {
                data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-gws.ClusterProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ClusterProps.Jsii$Proxy that = (ClusterProps.Jsii$Proxy) o;

            if (!clusterType.equals(that.clusterType)) return false;
            if (!vpcId.equals(that.vpcId)) return false;
            if (this.name != null ? !this.name.equals(that.name) : that.name != null) return false;
            if (this.policy != null ? !this.policy.equals(that.policy) : that.policy != null) return false;
            return this.vSwitchId != null ? this.vSwitchId.equals(that.vSwitchId) : that.vSwitchId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.clusterType.hashCode();
            result = 31 * result + (this.vpcId.hashCode());
            result = 31 * result + (this.name != null ? this.name.hashCode() : 0);
            result = 31 * result + (this.policy != null ? this.policy.hashCode() : 0);
            result = 31 * result + (this.vSwitchId != null ? this.vSwitchId.hashCode() : 0);
            return result;
        }
    }
}
