package com.aliyun.ros.cdk.brainindustrial;

/**
 * Properties for defining a <code>ALIYUN::BrainIndustrial::PidProject</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-25T05:23:23.550Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.brainindustrial.$Module.class, fqn = "@alicloud/ros-cdk-brainindustrial.RosPidProjectProps")
@software.amazon.jsii.Jsii.Proxy(RosPidProjectProps.Jsii$Proxy.class)
public interface RosPidProjectProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPidOrganizationId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPidProjectName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPidProjectDesc() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosPidProjectProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosPidProjectProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosPidProjectProps> {
        java.lang.Object pidOrganizationId;
        java.lang.Object pidProjectName;
        java.lang.Object pidProjectDesc;

        /**
         * Sets the value of {@link RosPidProjectProps#getPidOrganizationId}
         * @param pidOrganizationId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder pidOrganizationId(java.lang.String pidOrganizationId) {
            this.pidOrganizationId = pidOrganizationId;
            return this;
        }

        /**
         * Sets the value of {@link RosPidProjectProps#getPidOrganizationId}
         * @param pidOrganizationId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder pidOrganizationId(com.aliyun.ros.cdk.core.IResolvable pidOrganizationId) {
            this.pidOrganizationId = pidOrganizationId;
            return this;
        }

        /**
         * Sets the value of {@link RosPidProjectProps#getPidProjectName}
         * @param pidProjectName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder pidProjectName(java.lang.String pidProjectName) {
            this.pidProjectName = pidProjectName;
            return this;
        }

        /**
         * Sets the value of {@link RosPidProjectProps#getPidProjectName}
         * @param pidProjectName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder pidProjectName(com.aliyun.ros.cdk.core.IResolvable pidProjectName) {
            this.pidProjectName = pidProjectName;
            return this;
        }

        /**
         * Sets the value of {@link RosPidProjectProps#getPidProjectDesc}
         * @param pidProjectDesc the value to be set.
         * @return {@code this}
         */
        public Builder pidProjectDesc(java.lang.String pidProjectDesc) {
            this.pidProjectDesc = pidProjectDesc;
            return this;
        }

        /**
         * Sets the value of {@link RosPidProjectProps#getPidProjectDesc}
         * @param pidProjectDesc the value to be set.
         * @return {@code this}
         */
        public Builder pidProjectDesc(com.aliyun.ros.cdk.core.IResolvable pidProjectDesc) {
            this.pidProjectDesc = pidProjectDesc;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosPidProjectProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosPidProjectProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosPidProjectProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosPidProjectProps {
        private final java.lang.Object pidOrganizationId;
        private final java.lang.Object pidProjectName;
        private final java.lang.Object pidProjectDesc;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.pidOrganizationId = software.amazon.jsii.Kernel.get(this, "pidOrganizationId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.pidProjectName = software.amazon.jsii.Kernel.get(this, "pidProjectName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.pidProjectDesc = software.amazon.jsii.Kernel.get(this, "pidProjectDesc", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.pidOrganizationId = java.util.Objects.requireNonNull(builder.pidOrganizationId, "pidOrganizationId is required");
            this.pidProjectName = java.util.Objects.requireNonNull(builder.pidProjectName, "pidProjectName is required");
            this.pidProjectDesc = builder.pidProjectDesc;
        }

        @Override
        public final java.lang.Object getPidOrganizationId() {
            return this.pidOrganizationId;
        }

        @Override
        public final java.lang.Object getPidProjectName() {
            return this.pidProjectName;
        }

        @Override
        public final java.lang.Object getPidProjectDesc() {
            return this.pidProjectDesc;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("pidOrganizationId", om.valueToTree(this.getPidOrganizationId()));
            data.set("pidProjectName", om.valueToTree(this.getPidProjectName()));
            if (this.getPidProjectDesc() != null) {
                data.set("pidProjectDesc", om.valueToTree(this.getPidProjectDesc()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-brainindustrial.RosPidProjectProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosPidProjectProps.Jsii$Proxy that = (RosPidProjectProps.Jsii$Proxy) o;

            if (!pidOrganizationId.equals(that.pidOrganizationId)) return false;
            if (!pidProjectName.equals(that.pidProjectName)) return false;
            return this.pidProjectDesc != null ? this.pidProjectDesc.equals(that.pidProjectDesc) : that.pidProjectDesc == null;
        }

        @Override
        public final int hashCode() {
            int result = this.pidOrganizationId.hashCode();
            result = 31 * result + (this.pidProjectName.hashCode());
            result = 31 * result + (this.pidProjectDesc != null ? this.pidProjectDesc.hashCode() : 0);
            return result;
        }
    }
}
