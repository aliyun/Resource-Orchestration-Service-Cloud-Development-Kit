package com.aliyun.ros.cdk.cr;

/**
 * Properties for defining a `ALIYUN::CR::InstanceEndpointAclPolicy`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-02-04T07:29:35.293Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cr.$Module.class, fqn = "@alicloud/ros-cdk-cr.InstanceEndpointAclPolicyProps")
@software.amazon.jsii.Jsii.Proxy(InstanceEndpointAclPolicyProps.Jsii$Proxy.class)
public interface InstanceEndpointAclPolicyProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getEntry();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getInstanceId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getComment() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getEndpointType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getModuleName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getRegionId() {
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
        private java.lang.String entry;
        private java.lang.String instanceId;
        private java.lang.String comment;
        private java.lang.String endpointType;
        private java.lang.String moduleName;
        private java.lang.String regionId;

        /**
         * Sets the value of {@link InstanceEndpointAclPolicyProps#getEntry}
         * @param entry the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder entry(java.lang.String entry) {
            this.entry = entry;
            return this;
        }

        /**
         * Sets the value of {@link InstanceEndpointAclPolicyProps#getInstanceId}
         * @param instanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceEndpointAclPolicyProps#getComment}
         * @param comment the value to be set.
         * @return {@code this}
         */
        public Builder comment(java.lang.String comment) {
            this.comment = comment;
            return this;
        }

        /**
         * Sets the value of {@link InstanceEndpointAclPolicyProps#getEndpointType}
         * @param endpointType the value to be set.
         * @return {@code this}
         */
        public Builder endpointType(java.lang.String endpointType) {
            this.endpointType = endpointType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceEndpointAclPolicyProps#getModuleName}
         * @param moduleName the value to be set.
         * @return {@code this}
         */
        public Builder moduleName(java.lang.String moduleName) {
            this.moduleName = moduleName;
            return this;
        }

        /**
         * Sets the value of {@link InstanceEndpointAclPolicyProps#getRegionId}
         * @param regionId the value to be set.
         * @return {@code this}
         */
        public Builder regionId(java.lang.String regionId) {
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
            return new Jsii$Proxy(entry, instanceId, comment, endpointType, moduleName, regionId);
        }
    }

    /**
     * An implementation for {@link InstanceEndpointAclPolicyProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements InstanceEndpointAclPolicyProps {
        private final java.lang.String entry;
        private final java.lang.String instanceId;
        private final java.lang.String comment;
        private final java.lang.String endpointType;
        private final java.lang.String moduleName;
        private final java.lang.String regionId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.entry = software.amazon.jsii.Kernel.get(this, "entry", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.comment = software.amazon.jsii.Kernel.get(this, "comment", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.endpointType = software.amazon.jsii.Kernel.get(this, "endpointType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.moduleName = software.amazon.jsii.Kernel.get(this, "moduleName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.regionId = software.amazon.jsii.Kernel.get(this, "regionId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String entry, final java.lang.String instanceId, final java.lang.String comment, final java.lang.String endpointType, final java.lang.String moduleName, final java.lang.String regionId) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.entry = java.util.Objects.requireNonNull(entry, "entry is required");
            this.instanceId = java.util.Objects.requireNonNull(instanceId, "instanceId is required");
            this.comment = comment;
            this.endpointType = endpointType;
            this.moduleName = moduleName;
            this.regionId = regionId;
        }

        @Override
        public final java.lang.String getEntry() {
            return this.entry;
        }

        @Override
        public final java.lang.String getInstanceId() {
            return this.instanceId;
        }

        @Override
        public final java.lang.String getComment() {
            return this.comment;
        }

        @Override
        public final java.lang.String getEndpointType() {
            return this.endpointType;
        }

        @Override
        public final java.lang.String getModuleName() {
            return this.moduleName;
        }

        @Override
        public final java.lang.String getRegionId() {
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
