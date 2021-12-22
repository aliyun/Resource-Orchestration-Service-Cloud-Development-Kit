package com.aliyun.ros.cdk.elasticsearch;

/**
 * Properties for defining a `ALIYUN::ElasticSearch::Instance`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.49.0 (build e322d87)", date = "2021-12-21T15:12:57.867Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.elasticsearch.$Module.class, fqn = "@alicloud/ros-cdk-elasticsearch.RosInstanceProps")
@software.amazon.jsii.Jsii.Proxy(RosInstanceProps.Jsii$Proxy.class)
public interface RosInstanceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDataNode();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPassword();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVersion();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVSwitchId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableKibanaPrivate() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableKibanaPublic() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnablePublic() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceChargeType() {
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
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
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
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.elasticsearch.RosInstance.TagsProperty> getTags() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getYmlConfig() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getZoneCount() {
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
        java.lang.Object dataNode;
        java.lang.Object password;
        java.lang.Object version;
        java.lang.Object vSwitchId;
        java.lang.Object description;
        java.lang.Object enableKibanaPrivate;
        java.lang.Object enableKibanaPublic;
        java.lang.Object enablePublic;
        java.lang.Object instanceChargeType;
        java.lang.Object kibanaWhitelist;
        java.lang.Object masterNode;
        java.lang.Object period;
        java.lang.Object privateWhitelist;
        java.lang.Object publicWhitelist;
        java.lang.Object resourceGroupId;
        java.util.List<com.aliyun.ros.cdk.elasticsearch.RosInstance.TagsProperty> tags;
        java.lang.Object ymlConfig;
        java.lang.Object zoneCount;

        /**
         * Sets the value of {@link RosInstanceProps#getDataNode}
         * @param dataNode the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dataNode(com.aliyun.ros.cdk.elasticsearch.RosInstance.DataNodeProperty dataNode) {
            this.dataNode = dataNode;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getDataNode}
         * @param dataNode the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dataNode(com.aliyun.ros.cdk.core.IResolvable dataNode) {
            this.dataNode = dataNode;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getPassword}
         * @param password the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder password(java.lang.String password) {
            this.password = password;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getPassword}
         * @param password the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder password(com.aliyun.ros.cdk.core.IResolvable password) {
            this.password = password;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getVersion}
         * @param version the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder version(java.lang.String version) {
            this.version = version;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getVersion}
         * @param version the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder version(com.aliyun.ros.cdk.core.IResolvable version) {
            this.version = version;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getVSwitchId}
         * @param vSwitchId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getVSwitchId}
         * @param vSwitchId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
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
         * Sets the value of {@link RosInstanceProps#getEnableKibanaPrivate}
         * @param enableKibanaPrivate the value to be set.
         * @return {@code this}
         */
        public Builder enableKibanaPrivate(java.lang.Boolean enableKibanaPrivate) {
            this.enableKibanaPrivate = enableKibanaPrivate;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getEnableKibanaPrivate}
         * @param enableKibanaPrivate the value to be set.
         * @return {@code this}
         */
        public Builder enableKibanaPrivate(com.aliyun.ros.cdk.core.IResolvable enableKibanaPrivate) {
            this.enableKibanaPrivate = enableKibanaPrivate;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getEnableKibanaPublic}
         * @param enableKibanaPublic the value to be set.
         * @return {@code this}
         */
        public Builder enableKibanaPublic(java.lang.Boolean enableKibanaPublic) {
            this.enableKibanaPublic = enableKibanaPublic;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getEnableKibanaPublic}
         * @param enableKibanaPublic the value to be set.
         * @return {@code this}
         */
        public Builder enableKibanaPublic(com.aliyun.ros.cdk.core.IResolvable enableKibanaPublic) {
            this.enableKibanaPublic = enableKibanaPublic;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getEnablePublic}
         * @param enablePublic the value to be set.
         * @return {@code this}
         */
        public Builder enablePublic(java.lang.Boolean enablePublic) {
            this.enablePublic = enablePublic;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getEnablePublic}
         * @param enablePublic the value to be set.
         * @return {@code this}
         */
        public Builder enablePublic(com.aliyun.ros.cdk.core.IResolvable enablePublic) {
            this.enablePublic = enablePublic;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getInstanceChargeType}
         * @param instanceChargeType the value to be set.
         * @return {@code this}
         */
        public Builder instanceChargeType(java.lang.String instanceChargeType) {
            this.instanceChargeType = instanceChargeType;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getInstanceChargeType}
         * @param instanceChargeType the value to be set.
         * @return {@code this}
         */
        public Builder instanceChargeType(com.aliyun.ros.cdk.core.IResolvable instanceChargeType) {
            this.instanceChargeType = instanceChargeType;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getKibanaWhitelist}
         * @param kibanaWhitelist the value to be set.
         * @return {@code this}
         */
        public Builder kibanaWhitelist(java.util.List<? extends java.lang.Object> kibanaWhitelist) {
            this.kibanaWhitelist = kibanaWhitelist;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getKibanaWhitelist}
         * @param kibanaWhitelist the value to be set.
         * @return {@code this}
         */
        public Builder kibanaWhitelist(com.aliyun.ros.cdk.core.IResolvable kibanaWhitelist) {
            this.kibanaWhitelist = kibanaWhitelist;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getMasterNode}
         * @param masterNode the value to be set.
         * @return {@code this}
         */
        public Builder masterNode(com.aliyun.ros.cdk.core.IResolvable masterNode) {
            this.masterNode = masterNode;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getMasterNode}
         * @param masterNode the value to be set.
         * @return {@code this}
         */
        public Builder masterNode(com.aliyun.ros.cdk.elasticsearch.RosInstance.MasterNodeProperty masterNode) {
            this.masterNode = masterNode;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getPeriod}
         * @param period the value to be set.
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getPeriod}
         * @param period the value to be set.
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getPrivateWhitelist}
         * @param privateWhitelist the value to be set.
         * @return {@code this}
         */
        public Builder privateWhitelist(java.util.List<? extends java.lang.Object> privateWhitelist) {
            this.privateWhitelist = privateWhitelist;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getPrivateWhitelist}
         * @param privateWhitelist the value to be set.
         * @return {@code this}
         */
        public Builder privateWhitelist(com.aliyun.ros.cdk.core.IResolvable privateWhitelist) {
            this.privateWhitelist = privateWhitelist;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getPublicWhitelist}
         * @param publicWhitelist the value to be set.
         * @return {@code this}
         */
        public Builder publicWhitelist(java.util.List<? extends java.lang.Object> publicWhitelist) {
            this.publicWhitelist = publicWhitelist;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getPublicWhitelist}
         * @param publicWhitelist the value to be set.
         * @return {@code this}
         */
        public Builder publicWhitelist(com.aliyun.ros.cdk.core.IResolvable publicWhitelist) {
            this.publicWhitelist = publicWhitelist;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.elasticsearch.RosInstance.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.elasticsearch.RosInstance.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getYmlConfig}
         * @param ymlConfig the value to be set.
         * @return {@code this}
         */
        public Builder ymlConfig(com.aliyun.ros.cdk.core.IResolvable ymlConfig) {
            this.ymlConfig = ymlConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getYmlConfig}
         * @param ymlConfig the value to be set.
         * @return {@code this}
         */
        public Builder ymlConfig(com.aliyun.ros.cdk.elasticsearch.RosInstance.YMLConfigProperty ymlConfig) {
            this.ymlConfig = ymlConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getZoneCount}
         * @param zoneCount the value to be set.
         * @return {@code this}
         */
        public Builder zoneCount(java.lang.Number zoneCount) {
            this.zoneCount = zoneCount;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getZoneCount}
         * @param zoneCount the value to be set.
         * @return {@code this}
         */
        public Builder zoneCount(com.aliyun.ros.cdk.core.IResolvable zoneCount) {
            this.zoneCount = zoneCount;
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
        private final java.lang.Object dataNode;
        private final java.lang.Object password;
        private final java.lang.Object version;
        private final java.lang.Object vSwitchId;
        private final java.lang.Object description;
        private final java.lang.Object enableKibanaPrivate;
        private final java.lang.Object enableKibanaPublic;
        private final java.lang.Object enablePublic;
        private final java.lang.Object instanceChargeType;
        private final java.lang.Object kibanaWhitelist;
        private final java.lang.Object masterNode;
        private final java.lang.Object period;
        private final java.lang.Object privateWhitelist;
        private final java.lang.Object publicWhitelist;
        private final java.lang.Object resourceGroupId;
        private final java.util.List<com.aliyun.ros.cdk.elasticsearch.RosInstance.TagsProperty> tags;
        private final java.lang.Object ymlConfig;
        private final java.lang.Object zoneCount;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.dataNode = software.amazon.jsii.Kernel.get(this, "dataNode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.password = software.amazon.jsii.Kernel.get(this, "password", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.version = software.amazon.jsii.Kernel.get(this, "version", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enableKibanaPrivate = software.amazon.jsii.Kernel.get(this, "enableKibanaPrivate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enableKibanaPublic = software.amazon.jsii.Kernel.get(this, "enableKibanaPublic", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enablePublic = software.amazon.jsii.Kernel.get(this, "enablePublic", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceChargeType = software.amazon.jsii.Kernel.get(this, "instanceChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.kibanaWhitelist = software.amazon.jsii.Kernel.get(this, "kibanaWhitelist", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.masterNode = software.amazon.jsii.Kernel.get(this, "masterNode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.privateWhitelist = software.amazon.jsii.Kernel.get(this, "privateWhitelist", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.publicWhitelist = software.amazon.jsii.Kernel.get(this, "publicWhitelist", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.elasticsearch.RosInstance.TagsProperty.class)));
            this.ymlConfig = software.amazon.jsii.Kernel.get(this, "ymlConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneCount = software.amazon.jsii.Kernel.get(this, "zoneCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.dataNode = java.util.Objects.requireNonNull(builder.dataNode, "dataNode is required");
            this.password = java.util.Objects.requireNonNull(builder.password, "password is required");
            this.version = java.util.Objects.requireNonNull(builder.version, "version is required");
            this.vSwitchId = java.util.Objects.requireNonNull(builder.vSwitchId, "vSwitchId is required");
            this.description = builder.description;
            this.enableKibanaPrivate = builder.enableKibanaPrivate;
            this.enableKibanaPublic = builder.enableKibanaPublic;
            this.enablePublic = builder.enablePublic;
            this.instanceChargeType = builder.instanceChargeType;
            this.kibanaWhitelist = builder.kibanaWhitelist;
            this.masterNode = builder.masterNode;
            this.period = builder.period;
            this.privateWhitelist = builder.privateWhitelist;
            this.publicWhitelist = builder.publicWhitelist;
            this.resourceGroupId = builder.resourceGroupId;
            this.tags = (java.util.List<com.aliyun.ros.cdk.elasticsearch.RosInstance.TagsProperty>)builder.tags;
            this.ymlConfig = builder.ymlConfig;
            this.zoneCount = builder.zoneCount;
        }

        @Override
        public final java.lang.Object getDataNode() {
            return this.dataNode;
        }

        @Override
        public final java.lang.Object getPassword() {
            return this.password;
        }

        @Override
        public final java.lang.Object getVersion() {
            return this.version;
        }

        @Override
        public final java.lang.Object getVSwitchId() {
            return this.vSwitchId;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getEnableKibanaPrivate() {
            return this.enableKibanaPrivate;
        }

        @Override
        public final java.lang.Object getEnableKibanaPublic() {
            return this.enableKibanaPublic;
        }

        @Override
        public final java.lang.Object getEnablePublic() {
            return this.enablePublic;
        }

        @Override
        public final java.lang.Object getInstanceChargeType() {
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
        public final java.lang.Object getPeriod() {
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
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.elasticsearch.RosInstance.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.Object getYmlConfig() {
            return this.ymlConfig;
        }

        @Override
        public final java.lang.Object getZoneCount() {
            return this.zoneCount;
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
            if (this.getEnableKibanaPrivate() != null) {
                data.set("enableKibanaPrivate", om.valueToTree(this.getEnableKibanaPrivate()));
            }
            if (this.getEnableKibanaPublic() != null) {
                data.set("enableKibanaPublic", om.valueToTree(this.getEnableKibanaPublic()));
            }
            if (this.getEnablePublic() != null) {
                data.set("enablePublic", om.valueToTree(this.getEnablePublic()));
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
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getYmlConfig() != null) {
                data.set("ymlConfig", om.valueToTree(this.getYmlConfig()));
            }
            if (this.getZoneCount() != null) {
                data.set("zoneCount", om.valueToTree(this.getZoneCount()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-elasticsearch.RosInstanceProps"));
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

            if (!dataNode.equals(that.dataNode)) return false;
            if (!password.equals(that.password)) return false;
            if (!version.equals(that.version)) return false;
            if (!vSwitchId.equals(that.vSwitchId)) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.enableKibanaPrivate != null ? !this.enableKibanaPrivate.equals(that.enableKibanaPrivate) : that.enableKibanaPrivate != null) return false;
            if (this.enableKibanaPublic != null ? !this.enableKibanaPublic.equals(that.enableKibanaPublic) : that.enableKibanaPublic != null) return false;
            if (this.enablePublic != null ? !this.enablePublic.equals(that.enablePublic) : that.enablePublic != null) return false;
            if (this.instanceChargeType != null ? !this.instanceChargeType.equals(that.instanceChargeType) : that.instanceChargeType != null) return false;
            if (this.kibanaWhitelist != null ? !this.kibanaWhitelist.equals(that.kibanaWhitelist) : that.kibanaWhitelist != null) return false;
            if (this.masterNode != null ? !this.masterNode.equals(that.masterNode) : that.masterNode != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            if (this.privateWhitelist != null ? !this.privateWhitelist.equals(that.privateWhitelist) : that.privateWhitelist != null) return false;
            if (this.publicWhitelist != null ? !this.publicWhitelist.equals(that.publicWhitelist) : that.publicWhitelist != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            if (this.ymlConfig != null ? !this.ymlConfig.equals(that.ymlConfig) : that.ymlConfig != null) return false;
            return this.zoneCount != null ? this.zoneCount.equals(that.zoneCount) : that.zoneCount == null;
        }

        @Override
        public final int hashCode() {
            int result = this.dataNode.hashCode();
            result = 31 * result + (this.password.hashCode());
            result = 31 * result + (this.version.hashCode());
            result = 31 * result + (this.vSwitchId.hashCode());
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.enableKibanaPrivate != null ? this.enableKibanaPrivate.hashCode() : 0);
            result = 31 * result + (this.enableKibanaPublic != null ? this.enableKibanaPublic.hashCode() : 0);
            result = 31 * result + (this.enablePublic != null ? this.enablePublic.hashCode() : 0);
            result = 31 * result + (this.instanceChargeType != null ? this.instanceChargeType.hashCode() : 0);
            result = 31 * result + (this.kibanaWhitelist != null ? this.kibanaWhitelist.hashCode() : 0);
            result = 31 * result + (this.masterNode != null ? this.masterNode.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.privateWhitelist != null ? this.privateWhitelist.hashCode() : 0);
            result = 31 * result + (this.publicWhitelist != null ? this.publicWhitelist.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.ymlConfig != null ? this.ymlConfig.hashCode() : 0);
            result = 31 * result + (this.zoneCount != null ? this.zoneCount.hashCode() : 0);
            return result;
        }
    }
}
