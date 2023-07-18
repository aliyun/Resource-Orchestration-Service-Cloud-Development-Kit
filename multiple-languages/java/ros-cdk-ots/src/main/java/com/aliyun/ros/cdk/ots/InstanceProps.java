package com.aliyun.ros.cdk.ots;

/**
 * Properties for defining a <code>ALIYUN::OTS::Instance</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-07-18T08:28:02.830Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ots.$Module.class, fqn = "@alicloud/ros-cdk-ots.InstanceProps")
@software.amazon.jsii.Jsii.Proxy(InstanceProps.Jsii$Proxy.class)
public interface InstanceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property instanceName: The name of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceName();

    /**
     * Property clusterType: Cluster type, the default is SSD.
     * <p>
     * This parameter specifies the specification of the ots instance.
     * When the value is SSD, the ots instance is a high-performance instance.
     * When the value is Hybid, the ots instance is a capacity instance
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getClusterType() {
        return null;
    }

    /**
     * Property description: Instance description.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property network: Instance network type, default is NORMAL.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNetwork() {
        return null;
    }

    /**
     * Property tags: Tags to attach to instance.
     * <p>
     * Max support 5 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.ots.RosInstance.TagsProperty> getTags() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link InstanceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link InstanceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<InstanceProps> {
        java.lang.Object instanceName;
        java.lang.Object clusterType;
        java.lang.Object description;
        java.lang.Object network;
        java.util.List<com.aliyun.ros.cdk.ots.RosInstance.TagsProperty> tags;

        /**
         * Sets the value of {@link InstanceProps#getInstanceName}
         * @param instanceName Property instanceName: The name of the instance. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceName(java.lang.String instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getInstanceName}
         * @param instanceName Property instanceName: The name of the instance. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceName(com.aliyun.ros.cdk.core.IResolvable instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getClusterType}
         * @param clusterType Property clusterType: Cluster type, the default is SSD.
         *                    This parameter specifies the specification of the ots instance.
         *                    When the value is SSD, the ots instance is a high-performance instance.
         *                    When the value is Hybid, the ots instance is a capacity instance
         * @return {@code this}
         */
        public Builder clusterType(java.lang.String clusterType) {
            this.clusterType = clusterType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getClusterType}
         * @param clusterType Property clusterType: Cluster type, the default is SSD.
         *                    This parameter specifies the specification of the ots instance.
         *                    When the value is SSD, the ots instance is a high-performance instance.
         *                    When the value is Hybid, the ots instance is a capacity instance
         * @return {@code this}
         */
        public Builder clusterType(com.aliyun.ros.cdk.core.IResolvable clusterType) {
            this.clusterType = clusterType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getDescription}
         * @param description Property description: Instance description.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getDescription}
         * @param description Property description: Instance description.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getNetwork}
         * @param network Property network: Instance network type, default is NORMAL.
         * @return {@code this}
         */
        public Builder network(java.lang.String network) {
            this.network = network;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getNetwork}
         * @param network Property network: Instance network type, default is NORMAL.
         * @return {@code this}
         */
        public Builder network(com.aliyun.ros.cdk.core.IResolvable network) {
            this.network = network;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getTags}
         * @param tags Property tags: Tags to attach to instance.
         *             Max support 5 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.ots.RosInstance.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.ots.RosInstance.TagsProperty>)tags;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link InstanceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public InstanceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link InstanceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements InstanceProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ots.InstanceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            InstanceProps.Jsii$Proxy that = (InstanceProps.Jsii$Proxy) o;

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
