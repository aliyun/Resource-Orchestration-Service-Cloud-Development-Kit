package com.aliyun.ros.cdk.elasticsearch;

/**
 * Properties for defining a `ALIYUN::ElasticSearch::Instance`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:33.864Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.elasticsearch.$Module.class, fqn = "@alicloud/ros-cdk-elasticsearch.InstanceProps")
@software.amazon.jsii.Jsii.Proxy(InstanceProps.Jsii$Proxy.class)
public interface InstanceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDataNode();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getPassword();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getVersion();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getVSwitchId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getInstanceChargeType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getKibanaWhitelist() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMasterNode() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getPeriod() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPrivateWhitelist() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPublicWhitelist() {
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
        private java.lang.Object dataNode;
        private java.lang.String password;
        private java.lang.String version;
        private java.lang.String vSwitchId;
        private java.lang.String description;
        private java.lang.String instanceChargeType;
        private java.lang.Object kibanaWhitelist;
        private java.lang.Object masterNode;
        private java.lang.Number period;
        private java.lang.Object privateWhitelist;
        private java.lang.Object publicWhitelist;

        /**
         * Sets the value of {@link InstanceProps#getDataNode}
         * @param dataNode the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dataNode(com.aliyun.ros.cdk.elasticsearch.RosInstance.DataNodeProperty dataNode) {
            this.dataNode = dataNode;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getDataNode}
         * @param dataNode the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dataNode(com.aliyun.ros.cdk.core.IResolvable dataNode) {
            this.dataNode = dataNode;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getPassword}
         * @param password the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder password(java.lang.String password) {
            this.password = password;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getVersion}
         * @param version the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder version(java.lang.String version) {
            this.version = version;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getVSwitchId}
         * @param vSwitchId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getInstanceChargeType}
         * @param instanceChargeType the value to be set.
         * @return {@code this}
         */
        public Builder instanceChargeType(java.lang.String instanceChargeType) {
            this.instanceChargeType = instanceChargeType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getKibanaWhitelist}
         * @param kibanaWhitelist the value to be set.
         * @return {@code this}
         */
        public Builder kibanaWhitelist(java.util.List<? extends java.lang.Object> kibanaWhitelist) {
            this.kibanaWhitelist = kibanaWhitelist;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getKibanaWhitelist}
         * @param kibanaWhitelist the value to be set.
         * @return {@code this}
         */
        public Builder kibanaWhitelist(com.aliyun.ros.cdk.core.IResolvable kibanaWhitelist) {
            this.kibanaWhitelist = kibanaWhitelist;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getMasterNode}
         * @param masterNode the value to be set.
         * @return {@code this}
         */
        public Builder masterNode(com.aliyun.ros.cdk.core.IResolvable masterNode) {
            this.masterNode = masterNode;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getMasterNode}
         * @param masterNode the value to be set.
         * @return {@code this}
         */
        public Builder masterNode(com.aliyun.ros.cdk.elasticsearch.RosInstance.MasterNodeProperty masterNode) {
            this.masterNode = masterNode;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getPeriod}
         * @param period the value to be set.
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getPrivateWhitelist}
         * @param privateWhitelist the value to be set.
         * @return {@code this}
         */
        public Builder privateWhitelist(java.util.List<? extends java.lang.Object> privateWhitelist) {
            this.privateWhitelist = privateWhitelist;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getPrivateWhitelist}
         * @param privateWhitelist the value to be set.
         * @return {@code this}
         */
        public Builder privateWhitelist(com.aliyun.ros.cdk.core.IResolvable privateWhitelist) {
            this.privateWhitelist = privateWhitelist;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getPublicWhitelist}
         * @param publicWhitelist the value to be set.
         * @return {@code this}
         */
        public Builder publicWhitelist(java.util.List<? extends java.lang.Object> publicWhitelist) {
            this.publicWhitelist = publicWhitelist;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getPublicWhitelist}
         * @param publicWhitelist the value to be set.
         * @return {@code this}
         */
        public Builder publicWhitelist(com.aliyun.ros.cdk.core.IResolvable publicWhitelist) {
            this.publicWhitelist = publicWhitelist;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link InstanceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public InstanceProps build() {
            return new Jsii$Proxy(dataNode, password, version, vSwitchId, description, instanceChargeType, kibanaWhitelist, masterNode, period, privateWhitelist, publicWhitelist);
        }
    }

    /**
     * An implementation for {@link InstanceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements InstanceProps {
        private final java.lang.Object dataNode;
        private final java.lang.String password;
        private final java.lang.String version;
        private final java.lang.String vSwitchId;
        private final java.lang.String description;
        private final java.lang.String instanceChargeType;
        private final java.lang.Object kibanaWhitelist;
        private final java.lang.Object masterNode;
        private final java.lang.Number period;
        private final java.lang.Object privateWhitelist;
        private final java.lang.Object publicWhitelist;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.dataNode = software.amazon.jsii.Kernel.get(this, "dataNode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.password = software.amazon.jsii.Kernel.get(this, "password", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.version = software.amazon.jsii.Kernel.get(this, "version", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.instanceChargeType = software.amazon.jsii.Kernel.get(this, "instanceChargeType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.kibanaWhitelist = software.amazon.jsii.Kernel.get(this, "kibanaWhitelist", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.masterNode = software.amazon.jsii.Kernel.get(this, "masterNode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.privateWhitelist = software.amazon.jsii.Kernel.get(this, "privateWhitelist", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.publicWhitelist = software.amazon.jsii.Kernel.get(this, "publicWhitelist", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.Object dataNode, final java.lang.String password, final java.lang.String version, final java.lang.String vSwitchId, final java.lang.String description, final java.lang.String instanceChargeType, final java.lang.Object kibanaWhitelist, final java.lang.Object masterNode, final java.lang.Number period, final java.lang.Object privateWhitelist, final java.lang.Object publicWhitelist) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.dataNode = java.util.Objects.requireNonNull(dataNode, "dataNode is required");
            this.password = java.util.Objects.requireNonNull(password, "password is required");
            this.version = java.util.Objects.requireNonNull(version, "version is required");
            this.vSwitchId = java.util.Objects.requireNonNull(vSwitchId, "vSwitchId is required");
            this.description = description;
            this.instanceChargeType = instanceChargeType;
            this.kibanaWhitelist = kibanaWhitelist;
            this.masterNode = masterNode;
            this.period = period;
            this.privateWhitelist = privateWhitelist;
            this.publicWhitelist = publicWhitelist;
        }

        @Override
        public final java.lang.Object getDataNode() {
            return this.dataNode;
        }

        @Override
        public final java.lang.String getPassword() {
            return this.password;
        }

        @Override
        public final java.lang.String getVersion() {
            return this.version;
        }

        @Override
        public final java.lang.String getVSwitchId() {
            return this.vSwitchId;
        }

        @Override
        public final java.lang.String getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.String getInstanceChargeType() {
            return this.instanceChargeType;
        }

        @Override
        public final java.lang.Object getKibanaWhitelist() {
            return this.kibanaWhitelist;
        }

        @Override
        public final java.lang.Object getMasterNode() {
            return this.masterNode;
        }

        @Override
        public final java.lang.Number getPeriod() {
            return this.period;
        }

        @Override
        public final java.lang.Object getPrivateWhitelist() {
            return this.privateWhitelist;
        }

        @Override
        public final java.lang.Object getPublicWhitelist() {
            return this.publicWhitelist;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("dataNode", om.valueToTree(this.getDataNode()));
            data.set("password", om.valueToTree(this.getPassword()));
            data.set("version", om.valueToTree(this.getVersion()));
            data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getInstanceChargeType() != null) {
                data.set("instanceChargeType", om.valueToTree(this.getInstanceChargeType()));
            }
            if (this.getKibanaWhitelist() != null) {
                data.set("kibanaWhitelist", om.valueToTree(this.getKibanaWhitelist()));
            }
            if (this.getMasterNode() != null) {
                data.set("masterNode", om.valueToTree(this.getMasterNode()));
            }
            if (this.getPeriod() != null) {
                data.set("period", om.valueToTree(this.getPeriod()));
            }
            if (this.getPrivateWhitelist() != null) {
                data.set("privateWhitelist", om.valueToTree(this.getPrivateWhitelist()));
            }
            if (this.getPublicWhitelist() != null) {
                data.set("publicWhitelist", om.valueToTree(this.getPublicWhitelist()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-elasticsearch.InstanceProps"));
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

            if (!dataNode.equals(that.dataNode)) return false;
            if (!password.equals(that.password)) return false;
            if (!version.equals(that.version)) return false;
            if (!vSwitchId.equals(that.vSwitchId)) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.instanceChargeType != null ? !this.instanceChargeType.equals(that.instanceChargeType) : that.instanceChargeType != null) return false;
            if (this.kibanaWhitelist != null ? !this.kibanaWhitelist.equals(that.kibanaWhitelist) : that.kibanaWhitelist != null) return false;
            if (this.masterNode != null ? !this.masterNode.equals(that.masterNode) : that.masterNode != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            if (this.privateWhitelist != null ? !this.privateWhitelist.equals(that.privateWhitelist) : that.privateWhitelist != null) return false;
            return this.publicWhitelist != null ? this.publicWhitelist.equals(that.publicWhitelist) : that.publicWhitelist == null;
        }

        @Override
        public final int hashCode() {
            int result = this.dataNode.hashCode();
            result = 31 * result + (this.password.hashCode());
            result = 31 * result + (this.version.hashCode());
            result = 31 * result + (this.vSwitchId.hashCode());
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.instanceChargeType != null ? this.instanceChargeType.hashCode() : 0);
            result = 31 * result + (this.kibanaWhitelist != null ? this.kibanaWhitelist.hashCode() : 0);
            result = 31 * result + (this.masterNode != null ? this.masterNode.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.privateWhitelist != null ? this.privateWhitelist.hashCode() : 0);
            result = 31 * result + (this.publicWhitelist != null ? this.publicWhitelist.hashCode() : 0);
            return result;
        }
    }
}
