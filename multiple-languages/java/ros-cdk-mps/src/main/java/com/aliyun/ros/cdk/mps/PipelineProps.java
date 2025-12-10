package com.aliyun.ros.cdk.mps;

/**
 * Properties for defining a <code>Pipeline</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mps-pipeline
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:58.158Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mps.$Module.class, fqn = "@alicloud/ros-cdk-mps.PipelineProps")
@software.amazon.jsii.Jsii.Proxy(PipelineProps.Jsii$Proxy.class)
public interface PipelineProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property name: The new name of the MPS queue.
     * <p>
     * The value can contain letters, digits, and special
     * characters such as hyphens (-) and can be up to 128 bytes in size. The value cannot
     * start with a special character.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getName();

    /**
     * Property notifyConfig: The Message Service (MNS) configuration, such as the information about the MNS queue or topic.
     * <p>
     * For more information, see NotifyConfig.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNotifyConfig() {
        return null;
    }

    /**
     * Property role: The role that is assigned to the current RAM user.
     * <p>
     * To obtain the role, you can log on to the RAM console and choose Identities &gt; Roles in the left-side navigation pane.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRole() {
        return null;
    }

    /**
     * Property speed: Pipe type.
     * <p>
     * Value:
     * Boost: Double-speed transcoding
     * Standard: ordinary pipe
     * NarrowBandHDV2: Narrowband HD 2.0
     * AIVideoCover: Smart Screenshots
     * AIVideoTag: video tag (supports regions Shanghai, Beijing, Hangzhou).
     * Default: Standard.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSpeed() {
        return null;
    }

    /**
     * Property speedLevel: Speed level.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSpeedLevel() {
        return null;
    }

    /**
     * Property state: The new state of the MPS queue.
     * <p>
     * Active: The MPS queue is active. Jobs in the MPS queue can be scheduled and run by MPS.
     * Paused: The MPS queue is paused. Jobs in the MPS queue cannot be scheduled or run by MPS, and all jobs remain in the Submitted state. Jobs that are running will not be affected.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getState() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link PipelineProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link PipelineProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<PipelineProps> {
        java.lang.Object name;
        java.lang.Object notifyConfig;
        java.lang.Object role;
        java.lang.Object speed;
        java.lang.Object speedLevel;
        java.lang.Object state;

        /**
         * Sets the value of {@link PipelineProps#getName}
         * @param name Property name: The new name of the MPS queue. This parameter is required.
         *             The value can contain letters, digits, and special
         *             characters such as hyphens (-) and can be up to 128 bytes in size. The value cannot
         *             start with a special character.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link PipelineProps#getName}
         * @param name Property name: The new name of the MPS queue. This parameter is required.
         *             The value can contain letters, digits, and special
         *             characters such as hyphens (-) and can be up to 128 bytes in size. The value cannot
         *             start with a special character.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link PipelineProps#getNotifyConfig}
         * @param notifyConfig Property notifyConfig: The Message Service (MNS) configuration, such as the information about the MNS queue or topic.
         *                     For more information, see NotifyConfig.
         * @return {@code this}
         */
        public Builder notifyConfig(com.aliyun.ros.cdk.core.IResolvable notifyConfig) {
            this.notifyConfig = notifyConfig;
            return this;
        }

        /**
         * Sets the value of {@link PipelineProps#getNotifyConfig}
         * @param notifyConfig Property notifyConfig: The Message Service (MNS) configuration, such as the information about the MNS queue or topic.
         *                     For more information, see NotifyConfig.
         * @return {@code this}
         */
        public Builder notifyConfig(com.aliyun.ros.cdk.mps.RosPipeline.NotifyConfigProperty notifyConfig) {
            this.notifyConfig = notifyConfig;
            return this;
        }

        /**
         * Sets the value of {@link PipelineProps#getRole}
         * @param role Property role: The role that is assigned to the current RAM user.
         *             To obtain the role, you can log on to the RAM console and choose Identities &gt; Roles in the left-side navigation pane.
         * @return {@code this}
         */
        public Builder role(java.lang.String role) {
            this.role = role;
            return this;
        }

        /**
         * Sets the value of {@link PipelineProps#getRole}
         * @param role Property role: The role that is assigned to the current RAM user.
         *             To obtain the role, you can log on to the RAM console and choose Identities &gt; Roles in the left-side navigation pane.
         * @return {@code this}
         */
        public Builder role(com.aliyun.ros.cdk.core.IResolvable role) {
            this.role = role;
            return this;
        }

        /**
         * Sets the value of {@link PipelineProps#getSpeed}
         * @param speed Property speed: Pipe type.
         *              Value:
         *              Boost: Double-speed transcoding
         *              Standard: ordinary pipe
         *              NarrowBandHDV2: Narrowband HD 2.0
         *              AIVideoCover: Smart Screenshots
         *              AIVideoTag: video tag (supports regions Shanghai, Beijing, Hangzhou).
         *              Default: Standard.
         * @return {@code this}
         */
        public Builder speed(java.lang.String speed) {
            this.speed = speed;
            return this;
        }

        /**
         * Sets the value of {@link PipelineProps#getSpeed}
         * @param speed Property speed: Pipe type.
         *              Value:
         *              Boost: Double-speed transcoding
         *              Standard: ordinary pipe
         *              NarrowBandHDV2: Narrowband HD 2.0
         *              AIVideoCover: Smart Screenshots
         *              AIVideoTag: video tag (supports regions Shanghai, Beijing, Hangzhou).
         *              Default: Standard.
         * @return {@code this}
         */
        public Builder speed(com.aliyun.ros.cdk.core.IResolvable speed) {
            this.speed = speed;
            return this;
        }

        /**
         * Sets the value of {@link PipelineProps#getSpeedLevel}
         * @param speedLevel Property speedLevel: Speed level.
         * @return {@code this}
         */
        public Builder speedLevel(java.lang.Number speedLevel) {
            this.speedLevel = speedLevel;
            return this;
        }

        /**
         * Sets the value of {@link PipelineProps#getSpeedLevel}
         * @param speedLevel Property speedLevel: Speed level.
         * @return {@code this}
         */
        public Builder speedLevel(com.aliyun.ros.cdk.core.IResolvable speedLevel) {
            this.speedLevel = speedLevel;
            return this;
        }

        /**
         * Sets the value of {@link PipelineProps#getState}
         * @param state Property state: The new state of the MPS queue.
         *              Active: The MPS queue is active. Jobs in the MPS queue can be scheduled and run by MPS.
         *              Paused: The MPS queue is paused. Jobs in the MPS queue cannot be scheduled or run by MPS, and all jobs remain in the Submitted state. Jobs that are running will not be affected.
         * @return {@code this}
         */
        public Builder state(java.lang.String state) {
            this.state = state;
            return this;
        }

        /**
         * Sets the value of {@link PipelineProps#getState}
         * @param state Property state: The new state of the MPS queue.
         *              Active: The MPS queue is active. Jobs in the MPS queue can be scheduled and run by MPS.
         *              Paused: The MPS queue is paused. Jobs in the MPS queue cannot be scheduled or run by MPS, and all jobs remain in the Submitted state. Jobs that are running will not be affected.
         * @return {@code this}
         */
        public Builder state(com.aliyun.ros.cdk.core.IResolvable state) {
            this.state = state;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link PipelineProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public PipelineProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link PipelineProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PipelineProps {
        private final java.lang.Object name;
        private final java.lang.Object notifyConfig;
        private final java.lang.Object role;
        private final java.lang.Object speed;
        private final java.lang.Object speedLevel;
        private final java.lang.Object state;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.notifyConfig = software.amazon.jsii.Kernel.get(this, "notifyConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.role = software.amazon.jsii.Kernel.get(this, "role", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.speed = software.amazon.jsii.Kernel.get(this, "speed", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.speedLevel = software.amazon.jsii.Kernel.get(this, "speedLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.state = software.amazon.jsii.Kernel.get(this, "state", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.name = java.util.Objects.requireNonNull(builder.name, "name is required");
            this.notifyConfig = builder.notifyConfig;
            this.role = builder.role;
            this.speed = builder.speed;
            this.speedLevel = builder.speedLevel;
            this.state = builder.state;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getNotifyConfig() {
            return this.notifyConfig;
        }

        @Override
        public final java.lang.Object getRole() {
            return this.role;
        }

        @Override
        public final java.lang.Object getSpeed() {
            return this.speed;
        }

        @Override
        public final java.lang.Object getSpeedLevel() {
            return this.speedLevel;
        }

        @Override
        public final java.lang.Object getState() {
            return this.state;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("name", om.valueToTree(this.getName()));
            if (this.getNotifyConfig() != null) {
                data.set("notifyConfig", om.valueToTree(this.getNotifyConfig()));
            }
            if (this.getRole() != null) {
                data.set("role", om.valueToTree(this.getRole()));
            }
            if (this.getSpeed() != null) {
                data.set("speed", om.valueToTree(this.getSpeed()));
            }
            if (this.getSpeedLevel() != null) {
                data.set("speedLevel", om.valueToTree(this.getSpeedLevel()));
            }
            if (this.getState() != null) {
                data.set("state", om.valueToTree(this.getState()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-mps.PipelineProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            PipelineProps.Jsii$Proxy that = (PipelineProps.Jsii$Proxy) o;

            if (!name.equals(that.name)) return false;
            if (this.notifyConfig != null ? !this.notifyConfig.equals(that.notifyConfig) : that.notifyConfig != null) return false;
            if (this.role != null ? !this.role.equals(that.role) : that.role != null) return false;
            if (this.speed != null ? !this.speed.equals(that.speed) : that.speed != null) return false;
            if (this.speedLevel != null ? !this.speedLevel.equals(that.speedLevel) : that.speedLevel != null) return false;
            return this.state != null ? this.state.equals(that.state) : that.state == null;
        }

        @Override
        public final int hashCode() {
            int result = this.name.hashCode();
            result = 31 * result + (this.notifyConfig != null ? this.notifyConfig.hashCode() : 0);
            result = 31 * result + (this.role != null ? this.role.hashCode() : 0);
            result = 31 * result + (this.speed != null ? this.speed.hashCode() : 0);
            result = 31 * result + (this.speedLevel != null ? this.speedLevel.hashCode() : 0);
            result = 31 * result + (this.state != null ? this.state.hashCode() : 0);
            return result;
        }
    }
}
