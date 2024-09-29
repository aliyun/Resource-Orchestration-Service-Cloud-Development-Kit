package com.aliyun.ros.cdk.cr;

/**
 * Properties for defining a <code>InstanceEndpointAclPolicy</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-instanceendpointaclpolicy
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-29T07:52:37.259Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cr.$Module.class, fqn = "@alicloud/ros-cdk-cr.InstanceEndpointAclPolicyProps")
@software.amazon.jsii.Jsii.Proxy(InstanceEndpointAclPolicyProps.Jsii$Proxy.class)
public interface InstanceEndpointAclPolicyProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property entry: The IP address range that is allowed to access the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEntry();

    /**
     * Property instanceId: The ID of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId();

    /**
     * Property comment: The description of the entry.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getComment() {
        return null;
    }

    /**
     * Property endpointType: The type of the endpoint.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEndpointType() {
        return null;
    }

    /**
     * Property moduleName: The name of the module in the instance for which a whitelist is configured.
     * <p>
     * Valid
     * values: Registry and Chart.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getModuleName() {
        return null;
    }

    /**
     * Property regionId: Region ID of instance.
     * <p>
     * Default is current region.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRegionId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link InstanceEndpointAclPolicyProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link InstanceEndpointAclPolicyProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<InstanceEndpointAclPolicyProps> {
        java.lang.Object entry;
        java.lang.Object instanceId;
        java.lang.Object comment;
        java.lang.Object endpointType;
        java.lang.Object moduleName;
        java.lang.Object regionId;

        /**
         * Sets the value of {@link InstanceEndpointAclPolicyProps#getEntry}
         * @param entry Property entry: The IP address range that is allowed to access the instance. This parameter is required.
         * @return {@code this}
         */
        public Builder entry(java.lang.String entry) {
            this.entry = entry;
            return this;
        }

        /**
         * Sets the value of {@link InstanceEndpointAclPolicyProps#getEntry}
         * @param entry Property entry: The IP address range that is allowed to access the instance. This parameter is required.
         * @return {@code this}
         */
        public Builder entry(com.aliyun.ros.cdk.core.IResolvable entry) {
            this.entry = entry;
            return this;
        }

        /**
         * Sets the value of {@link InstanceEndpointAclPolicyProps#getInstanceId}
         * @param instanceId Property instanceId: The ID of the instance. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceEndpointAclPolicyProps#getInstanceId}
         * @param instanceId Property instanceId: The ID of the instance. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceEndpointAclPolicyProps#getComment}
         * @param comment Property comment: The description of the entry.
         * @return {@code this}
         */
        public Builder comment(java.lang.String comment) {
            this.comment = comment;
            return this;
        }

        /**
         * Sets the value of {@link InstanceEndpointAclPolicyProps#getComment}
         * @param comment Property comment: The description of the entry.
         * @return {@code this}
         */
        public Builder comment(com.aliyun.ros.cdk.core.IResolvable comment) {
            this.comment = comment;
            return this;
        }

        /**
         * Sets the value of {@link InstanceEndpointAclPolicyProps#getEndpointType}
         * @param endpointType Property endpointType: The type of the endpoint.
         * @return {@code this}
         */
        public Builder endpointType(java.lang.String endpointType) {
            this.endpointType = endpointType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceEndpointAclPolicyProps#getEndpointType}
         * @param endpointType Property endpointType: The type of the endpoint.
         * @return {@code this}
         */
        public Builder endpointType(com.aliyun.ros.cdk.core.IResolvable endpointType) {
            this.endpointType = endpointType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceEndpointAclPolicyProps#getModuleName}
         * @param moduleName Property moduleName: The name of the module in the instance for which a whitelist is configured.
         *                   Valid
         *                   values: Registry and Chart.
         * @return {@code this}
         */
        public Builder moduleName(java.lang.String moduleName) {
            this.moduleName = moduleName;
            return this;
        }

        /**
         * Sets the value of {@link InstanceEndpointAclPolicyProps#getModuleName}
         * @param moduleName Property moduleName: The name of the module in the instance for which a whitelist is configured.
         *                   Valid
         *                   values: Registry and Chart.
         * @return {@code this}
         */
        public Builder moduleName(com.aliyun.ros.cdk.core.IResolvable moduleName) {
            this.moduleName = moduleName;
            return this;
        }

        /**
         * Sets the value of {@link InstanceEndpointAclPolicyProps#getRegionId}
         * @param regionId Property regionId: Region ID of instance.
         *                 Default is current region.
         * @return {@code this}
         */
        public Builder regionId(java.lang.String regionId) {
            this.regionId = regionId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceEndpointAclPolicyProps#getRegionId}
         * @param regionId Property regionId: Region ID of instance.
         *                 Default is current region.
         * @return {@code this}
         */
        public Builder regionId(com.aliyun.ros.cdk.core.IResolvable regionId) {
            this.regionId = regionId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link InstanceEndpointAclPolicyProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public InstanceEndpointAclPolicyProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link InstanceEndpointAclPolicyProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements InstanceEndpointAclPolicyProps {
        private final java.lang.Object entry;
        private final java.lang.Object instanceId;
        private final java.lang.Object comment;
        private final java.lang.Object endpointType;
        private final java.lang.Object moduleName;
        private final java.lang.Object regionId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.entry = software.amazon.jsii.Kernel.get(this, "entry", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.comment = software.amazon.jsii.Kernel.get(this, "comment", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.endpointType = software.amazon.jsii.Kernel.get(this, "endpointType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.moduleName = software.amazon.jsii.Kernel.get(this, "moduleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.regionId = software.amazon.jsii.Kernel.get(this, "regionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.entry = java.util.Objects.requireNonNull(builder.entry, "entry is required");
            this.instanceId = java.util.Objects.requireNonNull(builder.instanceId, "instanceId is required");
            this.comment = builder.comment;
            this.endpointType = builder.endpointType;
            this.moduleName = builder.moduleName;
            this.regionId = builder.regionId;
        }

        @Override
        public final java.lang.Object getEntry() {
            return this.entry;
        }

        @Override
        public final java.lang.Object getInstanceId() {
            return this.instanceId;
        }

        @Override
        public final java.lang.Object getComment() {
            return this.comment;
        }

        @Override
        public final java.lang.Object getEndpointType() {
            return this.endpointType;
        }

        @Override
        public final java.lang.Object getModuleName() {
            return this.moduleName;
        }

        @Override
        public final java.lang.Object getRegionId() {
            return this.regionId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("entry", om.valueToTree(this.getEntry()));
            data.set("instanceId", om.valueToTree(this.getInstanceId()));
            if (this.getComment() != null) {
                data.set("comment", om.valueToTree(this.getComment()));
            }
            if (this.getEndpointType() != null) {
                data.set("endpointType", om.valueToTree(this.getEndpointType()));
            }
            if (this.getModuleName() != null) {
                data.set("moduleName", om.valueToTree(this.getModuleName()));
            }
            if (this.getRegionId() != null) {
                data.set("regionId", om.valueToTree(this.getRegionId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cr.InstanceEndpointAclPolicyProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            InstanceEndpointAclPolicyProps.Jsii$Proxy that = (InstanceEndpointAclPolicyProps.Jsii$Proxy) o;

            if (!entry.equals(that.entry)) return false;
            if (!instanceId.equals(that.instanceId)) return false;
            if (this.comment != null ? !this.comment.equals(that.comment) : that.comment != null) return false;
            if (this.endpointType != null ? !this.endpointType.equals(that.endpointType) : that.endpointType != null) return false;
            if (this.moduleName != null ? !this.moduleName.equals(that.moduleName) : that.moduleName != null) return false;
            return this.regionId != null ? this.regionId.equals(that.regionId) : that.regionId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.entry.hashCode();
            result = 31 * result + (this.instanceId.hashCode());
            result = 31 * result + (this.comment != null ? this.comment.hashCode() : 0);
            result = 31 * result + (this.endpointType != null ? this.endpointType.hashCode() : 0);
            result = 31 * result + (this.moduleName != null ? this.moduleName.hashCode() : 0);
            result = 31 * result + (this.regionId != null ? this.regionId.hashCode() : 0);
            return result;
        }
    }
}
