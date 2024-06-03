package com.aliyun.ros.cdk.cddc;

/**
 * Properties for defining a <code>RosDedicatedHostGroup</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cddc-dedicatedhostgroup
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-03T08:19:49.884Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cddc.$Module.class, fqn = "@alicloud/ros-cdk-cddc.RosDedicatedHostGroupProps")
@software.amazon.jsii.Jsii.Proxy(RosDedicatedHostGroupProps.Jsii$Proxy.class)
public interface RosDedicatedHostGroupProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEngine();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVpcId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAllocationPolicy() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCpuAllocationRatio() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDedicatedHostGroupDesc() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDiskAllocationRatio() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHostReplacePolicy() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMemAllocationRatio() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOpenPermission() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosDedicatedHostGroupProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosDedicatedHostGroupProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosDedicatedHostGroupProps> {
        java.lang.Object engine;
        java.lang.Object vpcId;
        java.lang.Object allocationPolicy;
        java.lang.Object cpuAllocationRatio;
        java.lang.Object dedicatedHostGroupDesc;
        java.lang.Object diskAllocationRatio;
        java.lang.Object hostReplacePolicy;
        java.lang.Object memAllocationRatio;
        java.lang.Object openPermission;

        /**
         * Sets the value of {@link RosDedicatedHostGroupProps#getEngine}
         * @param engine the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder engine(java.lang.String engine) {
            this.engine = engine;
            return this;
        }

        /**
         * Sets the value of {@link RosDedicatedHostGroupProps#getEngine}
         * @param engine the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder engine(com.aliyun.ros.cdk.core.IResolvable engine) {
            this.engine = engine;
            return this;
        }

        /**
         * Sets the value of {@link RosDedicatedHostGroupProps#getVpcId}
         * @param vpcId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosDedicatedHostGroupProps#getVpcId}
         * @param vpcId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosDedicatedHostGroupProps#getAllocationPolicy}
         * @param allocationPolicy the value to be set.
         * @return {@code this}
         */
        public Builder allocationPolicy(java.lang.String allocationPolicy) {
            this.allocationPolicy = allocationPolicy;
            return this;
        }

        /**
         * Sets the value of {@link RosDedicatedHostGroupProps#getAllocationPolicy}
         * @param allocationPolicy the value to be set.
         * @return {@code this}
         */
        public Builder allocationPolicy(com.aliyun.ros.cdk.core.IResolvable allocationPolicy) {
            this.allocationPolicy = allocationPolicy;
            return this;
        }

        /**
         * Sets the value of {@link RosDedicatedHostGroupProps#getCpuAllocationRatio}
         * @param cpuAllocationRatio the value to be set.
         * @return {@code this}
         */
        public Builder cpuAllocationRatio(java.lang.Number cpuAllocationRatio) {
            this.cpuAllocationRatio = cpuAllocationRatio;
            return this;
        }

        /**
         * Sets the value of {@link RosDedicatedHostGroupProps#getCpuAllocationRatio}
         * @param cpuAllocationRatio the value to be set.
         * @return {@code this}
         */
        public Builder cpuAllocationRatio(com.aliyun.ros.cdk.core.IResolvable cpuAllocationRatio) {
            this.cpuAllocationRatio = cpuAllocationRatio;
            return this;
        }

        /**
         * Sets the value of {@link RosDedicatedHostGroupProps#getDedicatedHostGroupDesc}
         * @param dedicatedHostGroupDesc the value to be set.
         * @return {@code this}
         */
        public Builder dedicatedHostGroupDesc(java.lang.String dedicatedHostGroupDesc) {
            this.dedicatedHostGroupDesc = dedicatedHostGroupDesc;
            return this;
        }

        /**
         * Sets the value of {@link RosDedicatedHostGroupProps#getDedicatedHostGroupDesc}
         * @param dedicatedHostGroupDesc the value to be set.
         * @return {@code this}
         */
        public Builder dedicatedHostGroupDesc(com.aliyun.ros.cdk.core.IResolvable dedicatedHostGroupDesc) {
            this.dedicatedHostGroupDesc = dedicatedHostGroupDesc;
            return this;
        }

        /**
         * Sets the value of {@link RosDedicatedHostGroupProps#getDiskAllocationRatio}
         * @param diskAllocationRatio the value to be set.
         * @return {@code this}
         */
        public Builder diskAllocationRatio(java.lang.Number diskAllocationRatio) {
            this.diskAllocationRatio = diskAllocationRatio;
            return this;
        }

        /**
         * Sets the value of {@link RosDedicatedHostGroupProps#getDiskAllocationRatio}
         * @param diskAllocationRatio the value to be set.
         * @return {@code this}
         */
        public Builder diskAllocationRatio(com.aliyun.ros.cdk.core.IResolvable diskAllocationRatio) {
            this.diskAllocationRatio = diskAllocationRatio;
            return this;
        }

        /**
         * Sets the value of {@link RosDedicatedHostGroupProps#getHostReplacePolicy}
         * @param hostReplacePolicy the value to be set.
         * @return {@code this}
         */
        public Builder hostReplacePolicy(java.lang.String hostReplacePolicy) {
            this.hostReplacePolicy = hostReplacePolicy;
            return this;
        }

        /**
         * Sets the value of {@link RosDedicatedHostGroupProps#getHostReplacePolicy}
         * @param hostReplacePolicy the value to be set.
         * @return {@code this}
         */
        public Builder hostReplacePolicy(com.aliyun.ros.cdk.core.IResolvable hostReplacePolicy) {
            this.hostReplacePolicy = hostReplacePolicy;
            return this;
        }

        /**
         * Sets the value of {@link RosDedicatedHostGroupProps#getMemAllocationRatio}
         * @param memAllocationRatio the value to be set.
         * @return {@code this}
         */
        public Builder memAllocationRatio(java.lang.Number memAllocationRatio) {
            this.memAllocationRatio = memAllocationRatio;
            return this;
        }

        /**
         * Sets the value of {@link RosDedicatedHostGroupProps#getMemAllocationRatio}
         * @param memAllocationRatio the value to be set.
         * @return {@code this}
         */
        public Builder memAllocationRatio(com.aliyun.ros.cdk.core.IResolvable memAllocationRatio) {
            this.memAllocationRatio = memAllocationRatio;
            return this;
        }

        /**
         * Sets the value of {@link RosDedicatedHostGroupProps#getOpenPermission}
         * @param openPermission the value to be set.
         * @return {@code this}
         */
        public Builder openPermission(java.lang.String openPermission) {
            this.openPermission = openPermission;
            return this;
        }

        /**
         * Sets the value of {@link RosDedicatedHostGroupProps#getOpenPermission}
         * @param openPermission the value to be set.
         * @return {@code this}
         */
        public Builder openPermission(com.aliyun.ros.cdk.core.IResolvable openPermission) {
            this.openPermission = openPermission;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosDedicatedHostGroupProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosDedicatedHostGroupProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosDedicatedHostGroupProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosDedicatedHostGroupProps {
        private final java.lang.Object engine;
        private final java.lang.Object vpcId;
        private final java.lang.Object allocationPolicy;
        private final java.lang.Object cpuAllocationRatio;
        private final java.lang.Object dedicatedHostGroupDesc;
        private final java.lang.Object diskAllocationRatio;
        private final java.lang.Object hostReplacePolicy;
        private final java.lang.Object memAllocationRatio;
        private final java.lang.Object openPermission;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.engine = software.amazon.jsii.Kernel.get(this, "engine", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.allocationPolicy = software.amazon.jsii.Kernel.get(this, "allocationPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.cpuAllocationRatio = software.amazon.jsii.Kernel.get(this, "cpuAllocationRatio", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dedicatedHostGroupDesc = software.amazon.jsii.Kernel.get(this, "dedicatedHostGroupDesc", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.diskAllocationRatio = software.amazon.jsii.Kernel.get(this, "diskAllocationRatio", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.hostReplacePolicy = software.amazon.jsii.Kernel.get(this, "hostReplacePolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.memAllocationRatio = software.amazon.jsii.Kernel.get(this, "memAllocationRatio", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.openPermission = software.amazon.jsii.Kernel.get(this, "openPermission", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.engine = java.util.Objects.requireNonNull(builder.engine, "engine is required");
            this.vpcId = java.util.Objects.requireNonNull(builder.vpcId, "vpcId is required");
            this.allocationPolicy = builder.allocationPolicy;
            this.cpuAllocationRatio = builder.cpuAllocationRatio;
            this.dedicatedHostGroupDesc = builder.dedicatedHostGroupDesc;
            this.diskAllocationRatio = builder.diskAllocationRatio;
            this.hostReplacePolicy = builder.hostReplacePolicy;
            this.memAllocationRatio = builder.memAllocationRatio;
            this.openPermission = builder.openPermission;
        }

        @Override
        public final java.lang.Object getEngine() {
            return this.engine;
        }

        @Override
        public final java.lang.Object getVpcId() {
            return this.vpcId;
        }

        @Override
        public final java.lang.Object getAllocationPolicy() {
            return this.allocationPolicy;
        }

        @Override
        public final java.lang.Object getCpuAllocationRatio() {
            return this.cpuAllocationRatio;
        }

        @Override
        public final java.lang.Object getDedicatedHostGroupDesc() {
            return this.dedicatedHostGroupDesc;
        }

        @Override
        public final java.lang.Object getDiskAllocationRatio() {
            return this.diskAllocationRatio;
        }

        @Override
        public final java.lang.Object getHostReplacePolicy() {
            return this.hostReplacePolicy;
        }

        @Override
        public final java.lang.Object getMemAllocationRatio() {
            return this.memAllocationRatio;
        }

        @Override
        public final java.lang.Object getOpenPermission() {
            return this.openPermission;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("engine", om.valueToTree(this.getEngine()));
            data.set("vpcId", om.valueToTree(this.getVpcId()));
            if (this.getAllocationPolicy() != null) {
                data.set("allocationPolicy", om.valueToTree(this.getAllocationPolicy()));
            }
            if (this.getCpuAllocationRatio() != null) {
                data.set("cpuAllocationRatio", om.valueToTree(this.getCpuAllocationRatio()));
            }
            if (this.getDedicatedHostGroupDesc() != null) {
                data.set("dedicatedHostGroupDesc", om.valueToTree(this.getDedicatedHostGroupDesc()));
            }
            if (this.getDiskAllocationRatio() != null) {
                data.set("diskAllocationRatio", om.valueToTree(this.getDiskAllocationRatio()));
            }
            if (this.getHostReplacePolicy() != null) {
                data.set("hostReplacePolicy", om.valueToTree(this.getHostReplacePolicy()));
            }
            if (this.getMemAllocationRatio() != null) {
                data.set("memAllocationRatio", om.valueToTree(this.getMemAllocationRatio()));
            }
            if (this.getOpenPermission() != null) {
                data.set("openPermission", om.valueToTree(this.getOpenPermission()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cddc.RosDedicatedHostGroupProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosDedicatedHostGroupProps.Jsii$Proxy that = (RosDedicatedHostGroupProps.Jsii$Proxy) o;

            if (!engine.equals(that.engine)) return false;
            if (!vpcId.equals(that.vpcId)) return false;
            if (this.allocationPolicy != null ? !this.allocationPolicy.equals(that.allocationPolicy) : that.allocationPolicy != null) return false;
            if (this.cpuAllocationRatio != null ? !this.cpuAllocationRatio.equals(that.cpuAllocationRatio) : that.cpuAllocationRatio != null) return false;
            if (this.dedicatedHostGroupDesc != null ? !this.dedicatedHostGroupDesc.equals(that.dedicatedHostGroupDesc) : that.dedicatedHostGroupDesc != null) return false;
            if (this.diskAllocationRatio != null ? !this.diskAllocationRatio.equals(that.diskAllocationRatio) : that.diskAllocationRatio != null) return false;
            if (this.hostReplacePolicy != null ? !this.hostReplacePolicy.equals(that.hostReplacePolicy) : that.hostReplacePolicy != null) return false;
            if (this.memAllocationRatio != null ? !this.memAllocationRatio.equals(that.memAllocationRatio) : that.memAllocationRatio != null) return false;
            return this.openPermission != null ? this.openPermission.equals(that.openPermission) : that.openPermission == null;
        }

        @Override
        public final int hashCode() {
            int result = this.engine.hashCode();
            result = 31 * result + (this.vpcId.hashCode());
            result = 31 * result + (this.allocationPolicy != null ? this.allocationPolicy.hashCode() : 0);
            result = 31 * result + (this.cpuAllocationRatio != null ? this.cpuAllocationRatio.hashCode() : 0);
            result = 31 * result + (this.dedicatedHostGroupDesc != null ? this.dedicatedHostGroupDesc.hashCode() : 0);
            result = 31 * result + (this.diskAllocationRatio != null ? this.diskAllocationRatio.hashCode() : 0);
            result = 31 * result + (this.hostReplacePolicy != null ? this.hostReplacePolicy.hashCode() : 0);
            result = 31 * result + (this.memAllocationRatio != null ? this.memAllocationRatio.hashCode() : 0);
            result = 31 * result + (this.openPermission != null ? this.openPermission.hashCode() : 0);
            return result;
        }
    }
}
