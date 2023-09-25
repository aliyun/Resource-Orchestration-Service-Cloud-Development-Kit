package com.aliyun.ros.cdk.dts;

/**
 * Properties for defining a <code>ALIYUN::DTS::MigrationJob</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-25T05:23:24.512Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dts.$Module.class, fqn = "@alicloud/ros-cdk-dts.MigrationJobProps")
@software.amazon.jsii.Jsii.Proxy(MigrationJobProps.Jsii$Proxy.class)
public interface MigrationJobProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property migrationJobClass: Migrating instance specifications, which can be: small, medium, large and so on.
     * <p>
     * Various specifications of the reference data migration test performance specifications
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getMigrationJobClass();

    /**
     * Property destinationEndpoint: Migration target configuration.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDestinationEndpoint() {
        return null;
    }

    /**
     * Property migrationJobName: Migrating job name.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMigrationJobName() {
        return null;
    }

    /**
     * Property migrationMode: Migration mode.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMigrationMode() {
        return null;
    }

    /**
     * Property migrationObject: Objects that need to be migrated.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMigrationObject() {
        return null;
    }

    /**
     * Property sourceEndpoint: Migration source configuration.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSourceEndpoint() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link MigrationJobProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link MigrationJobProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<MigrationJobProps> {
        java.lang.Object migrationJobClass;
        java.lang.Object destinationEndpoint;
        java.lang.Object migrationJobName;
        java.lang.Object migrationMode;
        java.lang.Object migrationObject;
        java.lang.Object sourceEndpoint;

        /**
         * Sets the value of {@link MigrationJobProps#getMigrationJobClass}
         * @param migrationJobClass Property migrationJobClass: Migrating instance specifications, which can be: small, medium, large and so on. This parameter is required.
         *                          Various specifications of the reference data migration test performance specifications
         * @return {@code this}
         */
        public Builder migrationJobClass(java.lang.String migrationJobClass) {
            this.migrationJobClass = migrationJobClass;
            return this;
        }

        /**
         * Sets the value of {@link MigrationJobProps#getMigrationJobClass}
         * @param migrationJobClass Property migrationJobClass: Migrating instance specifications, which can be: small, medium, large and so on. This parameter is required.
         *                          Various specifications of the reference data migration test performance specifications
         * @return {@code this}
         */
        public Builder migrationJobClass(com.aliyun.ros.cdk.core.IResolvable migrationJobClass) {
            this.migrationJobClass = migrationJobClass;
            return this;
        }

        /**
         * Sets the value of {@link MigrationJobProps#getDestinationEndpoint}
         * @param destinationEndpoint Property destinationEndpoint: Migration target configuration.
         * @return {@code this}
         */
        public Builder destinationEndpoint(com.aliyun.ros.cdk.core.IResolvable destinationEndpoint) {
            this.destinationEndpoint = destinationEndpoint;
            return this;
        }

        /**
         * Sets the value of {@link MigrationJobProps#getDestinationEndpoint}
         * @param destinationEndpoint Property destinationEndpoint: Migration target configuration.
         * @return {@code this}
         */
        public Builder destinationEndpoint(com.aliyun.ros.cdk.dts.RosMigrationJob.DestinationEndpointProperty destinationEndpoint) {
            this.destinationEndpoint = destinationEndpoint;
            return this;
        }

        /**
         * Sets the value of {@link MigrationJobProps#getMigrationJobName}
         * @param migrationJobName Property migrationJobName: Migrating job name.
         * @return {@code this}
         */
        public Builder migrationJobName(java.lang.String migrationJobName) {
            this.migrationJobName = migrationJobName;
            return this;
        }

        /**
         * Sets the value of {@link MigrationJobProps#getMigrationJobName}
         * @param migrationJobName Property migrationJobName: Migrating job name.
         * @return {@code this}
         */
        public Builder migrationJobName(com.aliyun.ros.cdk.core.IResolvable migrationJobName) {
            this.migrationJobName = migrationJobName;
            return this;
        }

        /**
         * Sets the value of {@link MigrationJobProps#getMigrationMode}
         * @param migrationMode Property migrationMode: Migration mode.
         * @return {@code this}
         */
        public Builder migrationMode(com.aliyun.ros.cdk.core.IResolvable migrationMode) {
            this.migrationMode = migrationMode;
            return this;
        }

        /**
         * Sets the value of {@link MigrationJobProps#getMigrationMode}
         * @param migrationMode Property migrationMode: Migration mode.
         * @return {@code this}
         */
        public Builder migrationMode(com.aliyun.ros.cdk.dts.RosMigrationJob.MigrationModeProperty migrationMode) {
            this.migrationMode = migrationMode;
            return this;
        }

        /**
         * Sets the value of {@link MigrationJobProps#getMigrationObject}
         * @param migrationObject Property migrationObject: Objects that need to be migrated.
         * @return {@code this}
         */
        public Builder migrationObject(com.aliyun.ros.cdk.core.IResolvable migrationObject) {
            this.migrationObject = migrationObject;
            return this;
        }

        /**
         * Sets the value of {@link MigrationJobProps#getMigrationObject}
         * @param migrationObject Property migrationObject: Objects that need to be migrated.
         * @return {@code this}
         */
        public Builder migrationObject(java.util.List<? extends java.lang.Object> migrationObject) {
            this.migrationObject = migrationObject;
            return this;
        }

        /**
         * Sets the value of {@link MigrationJobProps#getSourceEndpoint}
         * @param sourceEndpoint Property sourceEndpoint: Migration source configuration.
         * @return {@code this}
         */
        public Builder sourceEndpoint(com.aliyun.ros.cdk.core.IResolvable sourceEndpoint) {
            this.sourceEndpoint = sourceEndpoint;
            return this;
        }

        /**
         * Sets the value of {@link MigrationJobProps#getSourceEndpoint}
         * @param sourceEndpoint Property sourceEndpoint: Migration source configuration.
         * @return {@code this}
         */
        public Builder sourceEndpoint(com.aliyun.ros.cdk.dts.RosMigrationJob.SourceEndpointProperty sourceEndpoint) {
            this.sourceEndpoint = sourceEndpoint;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link MigrationJobProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public MigrationJobProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link MigrationJobProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements MigrationJobProps {
        private final java.lang.Object migrationJobClass;
        private final java.lang.Object destinationEndpoint;
        private final java.lang.Object migrationJobName;
        private final java.lang.Object migrationMode;
        private final java.lang.Object migrationObject;
        private final java.lang.Object sourceEndpoint;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.migrationJobClass = software.amazon.jsii.Kernel.get(this, "migrationJobClass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.destinationEndpoint = software.amazon.jsii.Kernel.get(this, "destinationEndpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.migrationJobName = software.amazon.jsii.Kernel.get(this, "migrationJobName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.migrationMode = software.amazon.jsii.Kernel.get(this, "migrationMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.migrationObject = software.amazon.jsii.Kernel.get(this, "migrationObject", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceEndpoint = software.amazon.jsii.Kernel.get(this, "sourceEndpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.migrationJobClass = java.util.Objects.requireNonNull(builder.migrationJobClass, "migrationJobClass is required");
            this.destinationEndpoint = builder.destinationEndpoint;
            this.migrationJobName = builder.migrationJobName;
            this.migrationMode = builder.migrationMode;
            this.migrationObject = builder.migrationObject;
            this.sourceEndpoint = builder.sourceEndpoint;
        }

        @Override
        public final java.lang.Object getMigrationJobClass() {
            return this.migrationJobClass;
        }

        @Override
        public final java.lang.Object getDestinationEndpoint() {
            return this.destinationEndpoint;
        }

        @Override
        public final java.lang.Object getMigrationJobName() {
            return this.migrationJobName;
        }

        @Override
        public final java.lang.Object getMigrationMode() {
            return this.migrationMode;
        }

        @Override
        public final java.lang.Object getMigrationObject() {
            return this.migrationObject;
        }

        @Override
        public final java.lang.Object getSourceEndpoint() {
            return this.sourceEndpoint;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("migrationJobClass", om.valueToTree(this.getMigrationJobClass()));
            if (this.getDestinationEndpoint() != null) {
                data.set("destinationEndpoint", om.valueToTree(this.getDestinationEndpoint()));
            }
            if (this.getMigrationJobName() != null) {
                data.set("migrationJobName", om.valueToTree(this.getMigrationJobName()));
            }
            if (this.getMigrationMode() != null) {
                data.set("migrationMode", om.valueToTree(this.getMigrationMode()));
            }
            if (this.getMigrationObject() != null) {
                data.set("migrationObject", om.valueToTree(this.getMigrationObject()));
            }
            if (this.getSourceEndpoint() != null) {
                data.set("sourceEndpoint", om.valueToTree(this.getSourceEndpoint()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-dts.MigrationJobProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            MigrationJobProps.Jsii$Proxy that = (MigrationJobProps.Jsii$Proxy) o;

            if (!migrationJobClass.equals(that.migrationJobClass)) return false;
            if (this.destinationEndpoint != null ? !this.destinationEndpoint.equals(that.destinationEndpoint) : that.destinationEndpoint != null) return false;
            if (this.migrationJobName != null ? !this.migrationJobName.equals(that.migrationJobName) : that.migrationJobName != null) return false;
            if (this.migrationMode != null ? !this.migrationMode.equals(that.migrationMode) : that.migrationMode != null) return false;
            if (this.migrationObject != null ? !this.migrationObject.equals(that.migrationObject) : that.migrationObject != null) return false;
            return this.sourceEndpoint != null ? this.sourceEndpoint.equals(that.sourceEndpoint) : that.sourceEndpoint == null;
        }

        @Override
        public final int hashCode() {
            int result = this.migrationJobClass.hashCode();
            result = 31 * result + (this.destinationEndpoint != null ? this.destinationEndpoint.hashCode() : 0);
            result = 31 * result + (this.migrationJobName != null ? this.migrationJobName.hashCode() : 0);
            result = 31 * result + (this.migrationMode != null ? this.migrationMode.hashCode() : 0);
            result = 31 * result + (this.migrationObject != null ? this.migrationObject.hashCode() : 0);
            result = 31 * result + (this.sourceEndpoint != null ? this.sourceEndpoint.hashCode() : 0);
            return result;
        }
    }
}
