package com.aliyun.ros.cdk.ots;

/**
 * Properties for defining a <code>ALIYUN::OTS::Instance</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-15T07:33:49.561Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ots.$Module.class, fqn = "@alicloud/ros-cdk-ots.RosInstanceProps")
@software.amazon.jsii.Jsii.Proxy(RosInstanceProps.Jsii$Proxy.class)
public interface RosInstanceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getClusterType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNetwork() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.ots.RosInstance.TagsProperty> getTags() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosInstanceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosInstanceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosInstanceProps> {
        java.lang.Object instanceName;
        java.lang.Object clusterType;
        java.lang.Object description;
        java.lang.Object network;
        java.util.List<com.aliyun.ros.cdk.ots.RosInstance.TagsProperty> tags;

        /**
         * Sets the value of {@link RosInstanceProps#getInstanceName}
         * @param instanceName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceName(java.lang.String instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getInstanceName}
         * @param instanceName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceName(com.aliyun.ros.cdk.core.IResolvable instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getClusterType}
         * @param clusterType the value to be set.
         * @return {@code this}
         */
        public Builder clusterType(java.lang.String clusterType) {
            this.clusterType = clusterType;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getClusterType}
         * @param clusterType the value to be set.
         * @return {@code this}
         */
        public Builder clusterType(com.aliyun.ros.cdk.core.IResolvable clusterType) {
            this.clusterType = clusterType;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getNetwork}
         * @param network the value to be set.
         * @return {@code this}
         */
        public Builder network(java.lang.String network) {
            this.network = network;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getNetwork}
         * @param network the value to be set.
         * @return {@code this}
         */
        public Builder network(com.aliyun.ros.cdk.core.IResolvable network) {
            this.network = network;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.ots.RosInstance.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.ots.RosInstance.TagsProperty>)tags;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosInstanceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosInstanceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosInstanceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosInstanceProps {
        private final java.lang.Object instanceName;
        private final java.lang.Object clusterType;
        private final java.lang.Object description;
        private final java.lang.Object network;
        private final java.util.List<com.aliyun.ros.cdk.ots.RosInstance.TagsProperty> tags;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.instanceName = software.amazon.jsii.Kernel.get(this, "instanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.clusterType = software.amazon.jsii.Kernel.get(this, "clusterType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.network = software.amazon.jsii.Kernel.get(this, "network", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ots.RosInstance.TagsProperty.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.instanceName = java.util.Objects.requireNonNull(builder.instanceName, "instanceName is required");
            this.clusterType = builder.clusterType;
            this.description = builder.description;
            this.network = builder.network;
            this.tags = (java.util.List<com.aliyun.ros.cdk.ots.RosInstance.TagsProperty>)builder.tags;
        }

        @Override
        public final java.lang.Object getInstanceName() {
            return this.instanceName;
        }

        @Override
        public final java.lang.Object getClusterType() {
            return this.clusterType;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getNetwork() {
            return this.network;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.ots.RosInstance.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("instanceName", om.valueToTree(this.getInstanceName()));
            if (this.getClusterType() != null) {
                data.set("clusterType", om.valueToTree(this.getClusterType()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getNetwork() != null) {
                data.set("network", om.valueToTree(this.getNetwork()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ots.RosInstanceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosInstanceProps.Jsii$Proxy that = (RosInstanceProps.Jsii$Proxy) o;

            if (!instanceName.equals(that.instanceName)) return false;
            if (this.clusterType != null ? !this.clusterType.equals(that.clusterType) : that.clusterType != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.network != null ? !this.network.equals(that.network) : that.network != null) return false;
            return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
        }

        @Override
        public final int hashCode() {
            int result = this.instanceName.hashCode();
            result = 31 * result + (this.clusterType != null ? this.clusterType.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.network != null ? this.network.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            return result;
        }
    }
}
