package com.aliyun.ros.cdk.vpc;

/**
 * Properties for defining a <code>RosIpamPool</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-ipampool
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T14:04:31.562Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RosIpamPoolProps")
@software.amazon.jsii.Jsii.Proxy(RosIpamPoolProps.Jsii$Proxy.class)
public interface RosIpamPoolProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getIpamScopeId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAllocationDefaultCidrMask() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAllocationMaxCidrMask() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAllocationMinCidrMask() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoImport() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpamPoolDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpamPoolName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpv6Isp() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpVersion() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPoolRegionId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSourceIpamPoolId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.vpc.RosIpamPool.TagsProperty> getTags() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosIpamPoolProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosIpamPoolProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosIpamPoolProps> {
        java.lang.Object ipamScopeId;
        java.lang.Object allocationDefaultCidrMask;
        java.lang.Object allocationMaxCidrMask;
        java.lang.Object allocationMinCidrMask;
        java.lang.Object autoImport;
        java.lang.Object ipamPoolDescription;
        java.lang.Object ipamPoolName;
        java.lang.Object ipv6Isp;
        java.lang.Object ipVersion;
        java.lang.Object poolRegionId;
        java.lang.Object resourceGroupId;
        java.lang.Object sourceIpamPoolId;
        java.util.List<com.aliyun.ros.cdk.vpc.RosIpamPool.TagsProperty> tags;

        /**
         * Sets the value of {@link RosIpamPoolProps#getIpamScopeId}
         * @param ipamScopeId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ipamScopeId(java.lang.String ipamScopeId) {
            this.ipamScopeId = ipamScopeId;
            return this;
        }

        /**
         * Sets the value of {@link RosIpamPoolProps#getIpamScopeId}
         * @param ipamScopeId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ipamScopeId(com.aliyun.ros.cdk.core.IResolvable ipamScopeId) {
            this.ipamScopeId = ipamScopeId;
            return this;
        }

        /**
         * Sets the value of {@link RosIpamPoolProps#getAllocationDefaultCidrMask}
         * @param allocationDefaultCidrMask the value to be set.
         * @return {@code this}
         */
        public Builder allocationDefaultCidrMask(java.lang.Number allocationDefaultCidrMask) {
            this.allocationDefaultCidrMask = allocationDefaultCidrMask;
            return this;
        }

        /**
         * Sets the value of {@link RosIpamPoolProps#getAllocationDefaultCidrMask}
         * @param allocationDefaultCidrMask the value to be set.
         * @return {@code this}
         */
        public Builder allocationDefaultCidrMask(com.aliyun.ros.cdk.core.IResolvable allocationDefaultCidrMask) {
            this.allocationDefaultCidrMask = allocationDefaultCidrMask;
            return this;
        }

        /**
         * Sets the value of {@link RosIpamPoolProps#getAllocationMaxCidrMask}
         * @param allocationMaxCidrMask the value to be set.
         * @return {@code this}
         */
        public Builder allocationMaxCidrMask(java.lang.Number allocationMaxCidrMask) {
            this.allocationMaxCidrMask = allocationMaxCidrMask;
            return this;
        }

        /**
         * Sets the value of {@link RosIpamPoolProps#getAllocationMaxCidrMask}
         * @param allocationMaxCidrMask the value to be set.
         * @return {@code this}
         */
        public Builder allocationMaxCidrMask(com.aliyun.ros.cdk.core.IResolvable allocationMaxCidrMask) {
            this.allocationMaxCidrMask = allocationMaxCidrMask;
            return this;
        }

        /**
         * Sets the value of {@link RosIpamPoolProps#getAllocationMinCidrMask}
         * @param allocationMinCidrMask the value to be set.
         * @return {@code this}
         */
        public Builder allocationMinCidrMask(java.lang.Number allocationMinCidrMask) {
            this.allocationMinCidrMask = allocationMinCidrMask;
            return this;
        }

        /**
         * Sets the value of {@link RosIpamPoolProps#getAllocationMinCidrMask}
         * @param allocationMinCidrMask the value to be set.
         * @return {@code this}
         */
        public Builder allocationMinCidrMask(com.aliyun.ros.cdk.core.IResolvable allocationMinCidrMask) {
            this.allocationMinCidrMask = allocationMinCidrMask;
            return this;
        }

        /**
         * Sets the value of {@link RosIpamPoolProps#getAutoImport}
         * @param autoImport the value to be set.
         * @return {@code this}
         */
        public Builder autoImport(java.lang.Boolean autoImport) {
            this.autoImport = autoImport;
            return this;
        }

        /**
         * Sets the value of {@link RosIpamPoolProps#getAutoImport}
         * @param autoImport the value to be set.
         * @return {@code this}
         */
        public Builder autoImport(com.aliyun.ros.cdk.core.IResolvable autoImport) {
            this.autoImport = autoImport;
            return this;
        }

        /**
         * Sets the value of {@link RosIpamPoolProps#getIpamPoolDescription}
         * @param ipamPoolDescription the value to be set.
         * @return {@code this}
         */
        public Builder ipamPoolDescription(java.lang.String ipamPoolDescription) {
            this.ipamPoolDescription = ipamPoolDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosIpamPoolProps#getIpamPoolDescription}
         * @param ipamPoolDescription the value to be set.
         * @return {@code this}
         */
        public Builder ipamPoolDescription(com.aliyun.ros.cdk.core.IResolvable ipamPoolDescription) {
            this.ipamPoolDescription = ipamPoolDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosIpamPoolProps#getIpamPoolName}
         * @param ipamPoolName the value to be set.
         * @return {@code this}
         */
        public Builder ipamPoolName(java.lang.String ipamPoolName) {
            this.ipamPoolName = ipamPoolName;
            return this;
        }

        /**
         * Sets the value of {@link RosIpamPoolProps#getIpamPoolName}
         * @param ipamPoolName the value to be set.
         * @return {@code this}
         */
        public Builder ipamPoolName(com.aliyun.ros.cdk.core.IResolvable ipamPoolName) {
            this.ipamPoolName = ipamPoolName;
            return this;
        }

        /**
         * Sets the value of {@link RosIpamPoolProps#getIpv6Isp}
         * @param ipv6Isp the value to be set.
         * @return {@code this}
         */
        public Builder ipv6Isp(java.lang.String ipv6Isp) {
            this.ipv6Isp = ipv6Isp;
            return this;
        }

        /**
         * Sets the value of {@link RosIpamPoolProps#getIpv6Isp}
         * @param ipv6Isp the value to be set.
         * @return {@code this}
         */
        public Builder ipv6Isp(com.aliyun.ros.cdk.core.IResolvable ipv6Isp) {
            this.ipv6Isp = ipv6Isp;
            return this;
        }

        /**
         * Sets the value of {@link RosIpamPoolProps#getIpVersion}
         * @param ipVersion the value to be set.
         * @return {@code this}
         */
        public Builder ipVersion(java.lang.String ipVersion) {
            this.ipVersion = ipVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosIpamPoolProps#getIpVersion}
         * @param ipVersion the value to be set.
         * @return {@code this}
         */
        public Builder ipVersion(com.aliyun.ros.cdk.core.IResolvable ipVersion) {
            this.ipVersion = ipVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosIpamPoolProps#getPoolRegionId}
         * @param poolRegionId the value to be set.
         * @return {@code this}
         */
        public Builder poolRegionId(java.lang.String poolRegionId) {
            this.poolRegionId = poolRegionId;
            return this;
        }

        /**
         * Sets the value of {@link RosIpamPoolProps#getPoolRegionId}
         * @param poolRegionId the value to be set.
         * @return {@code this}
         */
        public Builder poolRegionId(com.aliyun.ros.cdk.core.IResolvable poolRegionId) {
            this.poolRegionId = poolRegionId;
            return this;
        }

        /**
         * Sets the value of {@link RosIpamPoolProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosIpamPoolProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosIpamPoolProps#getSourceIpamPoolId}
         * @param sourceIpamPoolId the value to be set.
         * @return {@code this}
         */
        public Builder sourceIpamPoolId(java.lang.String sourceIpamPoolId) {
            this.sourceIpamPoolId = sourceIpamPoolId;
            return this;
        }

        /**
         * Sets the value of {@link RosIpamPoolProps#getSourceIpamPoolId}
         * @param sourceIpamPoolId the value to be set.
         * @return {@code this}
         */
        public Builder sourceIpamPoolId(com.aliyun.ros.cdk.core.IResolvable sourceIpamPoolId) {
            this.sourceIpamPoolId = sourceIpamPoolId;
            return this;
        }

        /**
         * Sets the value of {@link RosIpamPoolProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.vpc.RosIpamPool.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.vpc.RosIpamPool.TagsProperty>)tags;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosIpamPoolProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosIpamPoolProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosIpamPoolProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosIpamPoolProps {
        private final java.lang.Object ipamScopeId;
        private final java.lang.Object allocationDefaultCidrMask;
        private final java.lang.Object allocationMaxCidrMask;
        private final java.lang.Object allocationMinCidrMask;
        private final java.lang.Object autoImport;
        private final java.lang.Object ipamPoolDescription;
        private final java.lang.Object ipamPoolName;
        private final java.lang.Object ipv6Isp;
        private final java.lang.Object ipVersion;
        private final java.lang.Object poolRegionId;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object sourceIpamPoolId;
        private final java.util.List<com.aliyun.ros.cdk.vpc.RosIpamPool.TagsProperty> tags;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.ipamScopeId = software.amazon.jsii.Kernel.get(this, "ipamScopeId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.allocationDefaultCidrMask = software.amazon.jsii.Kernel.get(this, "allocationDefaultCidrMask", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.allocationMaxCidrMask = software.amazon.jsii.Kernel.get(this, "allocationMaxCidrMask", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.allocationMinCidrMask = software.amazon.jsii.Kernel.get(this, "allocationMinCidrMask", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoImport = software.amazon.jsii.Kernel.get(this, "autoImport", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipamPoolDescription = software.amazon.jsii.Kernel.get(this, "ipamPoolDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipamPoolName = software.amazon.jsii.Kernel.get(this, "ipamPoolName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipv6Isp = software.amazon.jsii.Kernel.get(this, "ipv6Isp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipVersion = software.amazon.jsii.Kernel.get(this, "ipVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.poolRegionId = software.amazon.jsii.Kernel.get(this, "poolRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceIpamPoolId = software.amazon.jsii.Kernel.get(this, "sourceIpamPoolId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.RosIpamPool.TagsProperty.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.ipamScopeId = java.util.Objects.requireNonNull(builder.ipamScopeId, "ipamScopeId is required");
            this.allocationDefaultCidrMask = builder.allocationDefaultCidrMask;
            this.allocationMaxCidrMask = builder.allocationMaxCidrMask;
            this.allocationMinCidrMask = builder.allocationMinCidrMask;
            this.autoImport = builder.autoImport;
            this.ipamPoolDescription = builder.ipamPoolDescription;
            this.ipamPoolName = builder.ipamPoolName;
            this.ipv6Isp = builder.ipv6Isp;
            this.ipVersion = builder.ipVersion;
            this.poolRegionId = builder.poolRegionId;
            this.resourceGroupId = builder.resourceGroupId;
            this.sourceIpamPoolId = builder.sourceIpamPoolId;
            this.tags = (java.util.List<com.aliyun.ros.cdk.vpc.RosIpamPool.TagsProperty>)builder.tags;
        }

        @Override
        public final java.lang.Object getIpamScopeId() {
            return this.ipamScopeId;
        }

        @Override
        public final java.lang.Object getAllocationDefaultCidrMask() {
            return this.allocationDefaultCidrMask;
        }

        @Override
        public final java.lang.Object getAllocationMaxCidrMask() {
            return this.allocationMaxCidrMask;
        }

        @Override
        public final java.lang.Object getAllocationMinCidrMask() {
            return this.allocationMinCidrMask;
        }

        @Override
        public final java.lang.Object getAutoImport() {
            return this.autoImport;
        }

        @Override
        public final java.lang.Object getIpamPoolDescription() {
            return this.ipamPoolDescription;
        }

        @Override
        public final java.lang.Object getIpamPoolName() {
            return this.ipamPoolName;
        }

        @Override
        public final java.lang.Object getIpv6Isp() {
            return this.ipv6Isp;
        }

        @Override
        public final java.lang.Object getIpVersion() {
            return this.ipVersion;
        }

        @Override
        public final java.lang.Object getPoolRegionId() {
            return this.poolRegionId;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getSourceIpamPoolId() {
            return this.sourceIpamPoolId;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.vpc.RosIpamPool.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("ipamScopeId", om.valueToTree(this.getIpamScopeId()));
            if (this.getAllocationDefaultCidrMask() != null) {
                data.set("allocationDefaultCidrMask", om.valueToTree(this.getAllocationDefaultCidrMask()));
            }
            if (this.getAllocationMaxCidrMask() != null) {
                data.set("allocationMaxCidrMask", om.valueToTree(this.getAllocationMaxCidrMask()));
            }
            if (this.getAllocationMinCidrMask() != null) {
                data.set("allocationMinCidrMask", om.valueToTree(this.getAllocationMinCidrMask()));
            }
            if (this.getAutoImport() != null) {
                data.set("autoImport", om.valueToTree(this.getAutoImport()));
            }
            if (this.getIpamPoolDescription() != null) {
                data.set("ipamPoolDescription", om.valueToTree(this.getIpamPoolDescription()));
            }
            if (this.getIpamPoolName() != null) {
                data.set("ipamPoolName", om.valueToTree(this.getIpamPoolName()));
            }
            if (this.getIpv6Isp() != null) {
                data.set("ipv6Isp", om.valueToTree(this.getIpv6Isp()));
            }
            if (this.getIpVersion() != null) {
                data.set("ipVersion", om.valueToTree(this.getIpVersion()));
            }
            if (this.getPoolRegionId() != null) {
                data.set("poolRegionId", om.valueToTree(this.getPoolRegionId()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getSourceIpamPoolId() != null) {
                data.set("sourceIpamPoolId", om.valueToTree(this.getSourceIpamPoolId()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.RosIpamPoolProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosIpamPoolProps.Jsii$Proxy that = (RosIpamPoolProps.Jsii$Proxy) o;

            if (!ipamScopeId.equals(that.ipamScopeId)) return false;
            if (this.allocationDefaultCidrMask != null ? !this.allocationDefaultCidrMask.equals(that.allocationDefaultCidrMask) : that.allocationDefaultCidrMask != null) return false;
            if (this.allocationMaxCidrMask != null ? !this.allocationMaxCidrMask.equals(that.allocationMaxCidrMask) : that.allocationMaxCidrMask != null) return false;
            if (this.allocationMinCidrMask != null ? !this.allocationMinCidrMask.equals(that.allocationMinCidrMask) : that.allocationMinCidrMask != null) return false;
            if (this.autoImport != null ? !this.autoImport.equals(that.autoImport) : that.autoImport != null) return false;
            if (this.ipamPoolDescription != null ? !this.ipamPoolDescription.equals(that.ipamPoolDescription) : that.ipamPoolDescription != null) return false;
            if (this.ipamPoolName != null ? !this.ipamPoolName.equals(that.ipamPoolName) : that.ipamPoolName != null) return false;
            if (this.ipv6Isp != null ? !this.ipv6Isp.equals(that.ipv6Isp) : that.ipv6Isp != null) return false;
            if (this.ipVersion != null ? !this.ipVersion.equals(that.ipVersion) : that.ipVersion != null) return false;
            if (this.poolRegionId != null ? !this.poolRegionId.equals(that.poolRegionId) : that.poolRegionId != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.sourceIpamPoolId != null ? !this.sourceIpamPoolId.equals(that.sourceIpamPoolId) : that.sourceIpamPoolId != null) return false;
            return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
        }

        @Override
        public final int hashCode() {
            int result = this.ipamScopeId.hashCode();
            result = 31 * result + (this.allocationDefaultCidrMask != null ? this.allocationDefaultCidrMask.hashCode() : 0);
            result = 31 * result + (this.allocationMaxCidrMask != null ? this.allocationMaxCidrMask.hashCode() : 0);
            result = 31 * result + (this.allocationMinCidrMask != null ? this.allocationMinCidrMask.hashCode() : 0);
            result = 31 * result + (this.autoImport != null ? this.autoImport.hashCode() : 0);
            result = 31 * result + (this.ipamPoolDescription != null ? this.ipamPoolDescription.hashCode() : 0);
            result = 31 * result + (this.ipamPoolName != null ? this.ipamPoolName.hashCode() : 0);
            result = 31 * result + (this.ipv6Isp != null ? this.ipv6Isp.hashCode() : 0);
            result = 31 * result + (this.ipVersion != null ? this.ipVersion.hashCode() : 0);
            result = 31 * result + (this.poolRegionId != null ? this.poolRegionId.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.sourceIpamPoolId != null ? this.sourceIpamPoolId.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            return result;
        }
    }
}
