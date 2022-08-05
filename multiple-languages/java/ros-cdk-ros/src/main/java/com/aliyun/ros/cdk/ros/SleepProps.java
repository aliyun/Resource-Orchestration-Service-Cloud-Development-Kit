package com.aliyun.ros.cdk.ros;

/**
 * Properties for defining a `ALIYUN::ROS::Sleep`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.63.2 (build a8a8833)", date = "2022-08-05T07:29:05.446Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ros.$Module.class, fqn = "@alicloud/ros-cdk-ros.SleepProps")
@software.amazon.jsii.Jsii.Proxy(SleepProps.Jsii$Proxy.class)
public interface SleepProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property createDuration: The number of seconds to wait before resource creation.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCreateDuration() {
        return null;
    }

    /**
     * Property deleteDuration: The number of seconds to wait before resource deletion.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeleteDuration() {
        return null;
    }

    /**
     * Property triggers: Arbitrary map of values that, when changed, will run update or update rollback delays again.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTriggers() {
        return null;
    }

    /**
     * Property updateDuration: The number of seconds to wait before resource update.
     * <p>
     * It only triggers when the property Triggers change and the status of stack is UPDATE_IN_PROGRESS.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUpdateDuration() {
        return null;
    }

    /**
     * Property updateRollbackDuration: The number of seconds to wait before resource update rollback.
     * <p>
     * It only triggers when stack update failed and resource was updated.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUpdateRollbackDuration() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link SleepProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link SleepProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<SleepProps> {
        java.lang.Object createDuration;
        java.lang.Object deleteDuration;
        java.lang.Object triggers;
        java.lang.Object updateDuration;
        java.lang.Object updateRollbackDuration;

        /**
         * Sets the value of {@link SleepProps#getCreateDuration}
         * @param createDuration Property createDuration: The number of seconds to wait before resource creation.
         * @return {@code this}
         */
        public Builder createDuration(java.lang.Number createDuration) {
            this.createDuration = createDuration;
            return this;
        }

        /**
         * Sets the value of {@link SleepProps#getCreateDuration}
         * @param createDuration Property createDuration: The number of seconds to wait before resource creation.
         * @return {@code this}
         */
        public Builder createDuration(com.aliyun.ros.cdk.core.IResolvable createDuration) {
            this.createDuration = createDuration;
            return this;
        }

        /**
         * Sets the value of {@link SleepProps#getDeleteDuration}
         * @param deleteDuration Property deleteDuration: The number of seconds to wait before resource deletion.
         * @return {@code this}
         */
        public Builder deleteDuration(java.lang.Number deleteDuration) {
            this.deleteDuration = deleteDuration;
            return this;
        }

        /**
         * Sets the value of {@link SleepProps#getDeleteDuration}
         * @param deleteDuration Property deleteDuration: The number of seconds to wait before resource deletion.
         * @return {@code this}
         */
        public Builder deleteDuration(com.aliyun.ros.cdk.core.IResolvable deleteDuration) {
            this.deleteDuration = deleteDuration;
            return this;
        }

        /**
         * Sets the value of {@link SleepProps#getTriggers}
         * @param triggers Property triggers: Arbitrary map of values that, when changed, will run update or update rollback delays again.
         * @return {@code this}
         */
        public Builder triggers(com.aliyun.ros.cdk.core.IResolvable triggers) {
            this.triggers = triggers;
            return this;
        }

        /**
         * Sets the value of {@link SleepProps#getTriggers}
         * @param triggers Property triggers: Arbitrary map of values that, when changed, will run update or update rollback delays again.
         * @return {@code this}
         */
        public Builder triggers(java.util.Map<java.lang.String, ? extends java.lang.Object> triggers) {
            this.triggers = triggers;
            return this;
        }

        /**
         * Sets the value of {@link SleepProps#getUpdateDuration}
         * @param updateDuration Property updateDuration: The number of seconds to wait before resource update.
         *                       It only triggers when the property Triggers change and the status of stack is UPDATE_IN_PROGRESS.
         * @return {@code this}
         */
        public Builder updateDuration(java.lang.Number updateDuration) {
            this.updateDuration = updateDuration;
            return this;
        }

        /**
         * Sets the value of {@link SleepProps#getUpdateDuration}
         * @param updateDuration Property updateDuration: The number of seconds to wait before resource update.
         *                       It only triggers when the property Triggers change and the status of stack is UPDATE_IN_PROGRESS.
         * @return {@code this}
         */
        public Builder updateDuration(com.aliyun.ros.cdk.core.IResolvable updateDuration) {
            this.updateDuration = updateDuration;
            return this;
        }

        /**
         * Sets the value of {@link SleepProps#getUpdateRollbackDuration}
         * @param updateRollbackDuration Property updateRollbackDuration: The number of seconds to wait before resource update rollback.
         *                               It only triggers when stack update failed and resource was updated.
         * @return {@code this}
         */
        public Builder updateRollbackDuration(java.lang.Number updateRollbackDuration) {
            this.updateRollbackDuration = updateRollbackDuration;
            return this;
        }

        /**
         * Sets the value of {@link SleepProps#getUpdateRollbackDuration}
         * @param updateRollbackDuration Property updateRollbackDuration: The number of seconds to wait before resource update rollback.
         *                               It only triggers when stack update failed and resource was updated.
         * @return {@code this}
         */
        public Builder updateRollbackDuration(com.aliyun.ros.cdk.core.IResolvable updateRollbackDuration) {
            this.updateRollbackDuration = updateRollbackDuration;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link SleepProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public SleepProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link SleepProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SleepProps {
        private final java.lang.Object createDuration;
        private final java.lang.Object deleteDuration;
        private final java.lang.Object triggers;
        private final java.lang.Object updateDuration;
        private final java.lang.Object updateRollbackDuration;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.createDuration = software.amazon.jsii.Kernel.get(this, "createDuration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deleteDuration = software.amazon.jsii.Kernel.get(this, "deleteDuration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.triggers = software.amazon.jsii.Kernel.get(this, "triggers", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.updateDuration = software.amazon.jsii.Kernel.get(this, "updateDuration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.updateRollbackDuration = software.amazon.jsii.Kernel.get(this, "updateRollbackDuration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.createDuration = builder.createDuration;
            this.deleteDuration = builder.deleteDuration;
            this.triggers = builder.triggers;
            this.updateDuration = builder.updateDuration;
            this.updateRollbackDuration = builder.updateRollbackDuration;
        }

        @Override
        public final java.lang.Object getCreateDuration() {
            return this.createDuration;
        }

        @Override
        public final java.lang.Object getDeleteDuration() {
            return this.deleteDuration;
        }

        @Override
        public final java.lang.Object getTriggers() {
            return this.triggers;
        }

        @Override
        public final java.lang.Object getUpdateDuration() {
            return this.updateDuration;
        }

        @Override
        public final java.lang.Object getUpdateRollbackDuration() {
            return this.updateRollbackDuration;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getCreateDuration() != null) {
                data.set("createDuration", om.valueToTree(this.getCreateDuration()));
            }
            if (this.getDeleteDuration() != null) {
                data.set("deleteDuration", om.valueToTree(this.getDeleteDuration()));
            }
            if (this.getTriggers() != null) {
                data.set("triggers", om.valueToTree(this.getTriggers()));
            }
            if (this.getUpdateDuration() != null) {
                data.set("updateDuration", om.valueToTree(this.getUpdateDuration()));
            }
            if (this.getUpdateRollbackDuration() != null) {
                data.set("updateRollbackDuration", om.valueToTree(this.getUpdateRollbackDuration()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ros.SleepProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            SleepProps.Jsii$Proxy that = (SleepProps.Jsii$Proxy) o;

            if (this.createDuration != null ? !this.createDuration.equals(that.createDuration) : that.createDuration != null) return false;
            if (this.deleteDuration != null ? !this.deleteDuration.equals(that.deleteDuration) : that.deleteDuration != null) return false;
            if (this.triggers != null ? !this.triggers.equals(that.triggers) : that.triggers != null) return false;
            if (this.updateDuration != null ? !this.updateDuration.equals(that.updateDuration) : that.updateDuration != null) return false;
            return this.updateRollbackDuration != null ? this.updateRollbackDuration.equals(that.updateRollbackDuration) : that.updateRollbackDuration == null;
        }

        @Override
        public final int hashCode() {
            int result = this.createDuration != null ? this.createDuration.hashCode() : 0;
            result = 31 * result + (this.deleteDuration != null ? this.deleteDuration.hashCode() : 0);
            result = 31 * result + (this.triggers != null ? this.triggers.hashCode() : 0);
            result = 31 * result + (this.updateDuration != null ? this.updateDuration.hashCode() : 0);
            result = 31 * result + (this.updateRollbackDuration != null ? this.updateRollbackDuration.hashCode() : 0);
            return result;
        }
    }
}
