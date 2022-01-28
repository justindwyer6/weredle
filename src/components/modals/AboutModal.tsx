import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="About" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500">
        This is an open source clone of the game Wordle with a
        Werewolf twist.
      </p>
      <p className="text-sm text-gray-500">
        <br />
        <a
          href="https://github.com/justindwyer6/weredle"
          className="underline font-bold"
        >
          Check out the code here
        </a>
      </p>
      <br />
      <p className="text-sm text-gray-500">
        <a
          href="https://github.com/hannahcode/wordle"
          className="underline font-bold"
        >
          Check out the code this was forked from here
        </a>
      </p>
      <br />
      <p className="text-sm text-gray-500">
        <a
          href="https://www.powerlanguage.co.uk/wordle/"
          className="underline font-bold"
        >
          Play the original Wordle here
        </a>
      </p>
    </BaseModal>
  )
}
